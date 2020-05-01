import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public comic: Comic
  public loaded: Boolean = false;

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
        setTimeout(() => this.loaded = true, 2500)
      }
    }, (err: any) => {
        console.log(err)
    });
  }

  rateComic() {
  }

  getRating(event) {
    console.log(event)
    const stars: any = document.getElementsByTagName('label');
    let value = parseInt(event.target.value)

    switch (value) {

      // case 1: for (let i of stars) {
      //   i.style.color = '#A9A9A9'
      // }
      //   break;

    }

    // swich()

  }
}
