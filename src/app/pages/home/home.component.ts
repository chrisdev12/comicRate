import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comic } from 'src/app/models/comic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public ratingForm: FormGroup;
  private rating: Rating
  public comic: Comic;
  public loaded: Boolean;
  public ratingDesc: string = 'Aún no has votado 😳';

  constructor(
    private formBuilder: FormBuilder,
    private _service: ComicsService,
  ) {
    this.buildForm();
    this.rating = new Rating();
  }

  ngOnInit(): void {
    this.getComic(this.randomNumber(1, 2299));
  }

  getComic(id: number) {
    this.loaded = false
    this._service.getComics(id).subscribe((res: Comic) => {
      if (res) {
        this.comic = res;
        setTimeout(() => this.loaded = true, 500)
      }
    }, (err: any) => console.log(err));
  }

  getRating(event) {
    let value = parseInt(event.target.value)
    switch (value) {
      case 1: this.ratingDesc = 'Quitalo de mi vista';
        break;
      case 2: this.ratingDesc = 'Meh';
        break;
      case 3: this.ratingDesc = 'Tiene su no sé qué';
        break;
      case 4: this.ratingDesc = 'Está interesante';
        break;
      case 5: this.ratingDesc = 'WOW';
        break;
      case 6: this.ratingDesc = 'Gracias por tanto';
        break;
      default: this.ratingDesc = 'Aún no has votado :('
        break;
    }
  }

  randomNumber(min: number,max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  /**
   * @BuildForm construir las validaciones para nuestros inputs
   * @Getters Disparar los serrores en caso de que no se cumplan las validaciones
   * @RatingFormInvalid verificar en el submit si los validores fueron cumplidos,
   * de lo contrario mostrar en pantalla las condiciones que se necesitan.
   */
  buildForm() {
    this.ratingForm = this.formBuilder.group({
      value: ['', [Validators.required]],
      review: ['', [Validators.required, Validators.minLength(15)]],
    })
  }

  get reviewValidate() {
    return this.ratingForm.get('review').invalid && (this.ratingForm.get('review').touched  || this.ratingForm.get('review').dirty);
  }

  get valueValidate() {
    return this.ratingForm.get('value').invalid && (this.ratingForm.get('value').touched  || this.ratingForm.get('value').dirty);
  }

  rateComic() {
    if (this.ratingForm.invalid) {
      return Object.values(this.ratingForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    this.rating.name = this.comic.num.toString();
    this.rating.value = parseInt(this.ratingForm.get('value').value);
    this.rating.review = this.ratingForm.get('review').value;

    //Guardar rating
    this._service.storeRating(this.rating);
    //Reiniciar form
    this.ratingForm.reset();
    //Traer un nuevo Comic random
    this.getComic(this.randomNumber(1, 2299));
  }

  nextComic() {
    this.getComic(this.randomNumber(1, 2299));
  }
}
