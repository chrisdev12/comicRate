import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comic } from 'src/app/models/comic';
import { Form } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public comic: Comic
  public loaded: Boolean = false;
  public rating: string = 'Aún no has votado :('

  constructor(
    private _service: ComicsService,
  ) { }

  ngOnInit(): void {
    this.getComic();
  }

  getComic() {
    this._service.getComics(1).subscribe((res: Comic) => {
      if (res) {

        console.log(res);
        this.comic = res;
        setTimeout(() => this.loaded = true, 1500)
      }
    }, (err: any) => {
        console.log(err)
    });
  }

  rateComic() {
    console.log('comic');
  }

  getRating(event) {
    let value = parseInt(event.target.value)
    switch (value) {
      case 1: this.rating = 'Quitalo de mi vista';
        break;
      case 2: this.rating = 'Meh';
        break;
      case 3: this.rating = 'Tiene su no sé qué';
        break;
      case 4: this.rating = 'Está interesante';
        break;
      case 5: this.rating = 'WOW';
        break;
      case 6: this.rating = 'Gracias por tanto';
        break;
      default: this.rating = 'Aún no has votado :('
        break;
    }
  }
}
