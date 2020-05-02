import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  public comics: any = document.getElementsByClassName('container-img-random');
  public title: string;

  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.title ='Estamos trayendo tus comics 😅'
    for (let i = 0; i < 12; i++) {
      this._service.getComics(this.randomNumber(1, 2299))
        .subscribe((res: Comic) => {
          if (res) {
            this.comics[i].firstChild.innerText = `#${res.num} ${res.title}`;
            this.comics[i].lastChild.src = res.img;
          }
        })
    }
    //La petición es demasiada rapida. SetTime Out necesario.
    setTimeout(() => this.title = 'Difruta de tus comics al por mayor... 😱',
      1300);
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
