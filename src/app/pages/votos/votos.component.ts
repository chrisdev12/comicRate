import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Rating } from 'src/app/models/rating';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.scss']
})
export class VotosComponent implements OnInit {

  public comicRatings: Array<Rating>;
  public reqComic: boolean = false;
  public comic: Comic;

  // opciones gráfico
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Puntaje';
  showYAxisLabel = true;
  yAxisLabel = '# Comic';

  colorScheme = 'fire'

  constructor(private _service: ComicsService)
  {}

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    if (localStorage.getItem('ratings') === null) {
      return
    }

    this._service.getRatings().subscribe((res: Array<Rating>) => {

      if (res) return this.comicRatings = res;
    }, (err: any) => console.log(err));
  }

  showComic(event) {
    const id = parseInt(event.target.value)
    console.log(id);
    this._service.getComics(id).subscribe((res: Comic) => {
      if (res) {
        this.comic = res;
        this.reqComic = true;
      }
    }, (err: any) => console.log(err));
  }
}
