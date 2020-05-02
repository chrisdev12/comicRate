import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.sass']
})
export class VotosComponent implements OnInit {

  public comicRatings: Array<Rating>;
  private rating: Rating;

  constructor(
    private _service: ComicsService
  ) { }

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    this._service.getRatings().subscribe((res: Array<Rating>) => {
      if (res) {
        this.comicRatings = res;
      }
    }, (err: any) => console.log(err));
  }

}
