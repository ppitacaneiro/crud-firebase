import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url:string = "https://heroesapp-5d1ef.firebaseio.com";

  constructor(private http:HttpClient) { }

  createHeroe(heroe:HeroeModel) {
    return this.http.post(`${ this.url }/heroes.json`, heroe);
  }
}
