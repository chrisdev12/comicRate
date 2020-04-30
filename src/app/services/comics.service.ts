import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Comic } from "../models/comic";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  public dataAvailable = true;
  readonly ServiceUrl = (id: number) => `./api/${id}/info.0.json`; //Configurado en el proxy.conf.json

  constructor(private http: HttpClient) {}

  // Api recibe números del 1 al 2299

  getComics(id: number): Observable<Comic>{
    return this.http.get(this.ServiceUrl(id)).pipe(
      map(res => res as Comic));
  }
}
