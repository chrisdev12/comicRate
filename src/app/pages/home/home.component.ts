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

      }
    }, (err: any) => {
        console.log(err)
    });
  }
}
