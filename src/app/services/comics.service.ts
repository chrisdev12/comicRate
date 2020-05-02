import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from "../models/comic";
import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { map } from "rxjs/operators";
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  public dataAvailable = true;
  public ServiceUrl = (id: number) => `./api/${id}/info.0.json`; //Configurado en el proxy.conf.json

  constructor(private http: HttpClient) { }

  // Api recibe números del 1 al 2299

  getComics(id: number): Observable<Comic> {
    return this.http.get(this.ServiceUrl(id)).pipe(
      map(res => res as Comic));
  }

  storeRating(rating: Rating) {
    let newRating = JSON.stringify(rating)
    if (localStorage.getItem('ratings') === null) {
      return localStorage.setItem('ratings', `${newRating}`);
    }

    let currentRatings =  localStorage.getItem('ratings')
    currentRatings += `/n ${newRating}`
    localStorage.setItem('ratings', currentRatings);
  }

  getRatings(): Observable<Rating[]>{
    const ratings = localStorage.getItem('ratings').split('/n ');
    const rateArray: Array<Rating> = []
    //Convertir de string a objetos lo recuperado de localStorage
    for (let i of ratings) {
      rateArray.push(JSON.parse(i))
    }
    return of(rateArray);
  }
}

