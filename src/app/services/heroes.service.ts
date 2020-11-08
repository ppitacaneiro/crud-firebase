import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url:string = "https://heroesapp-5d1ef.firebaseio.com";

  constructor(private http:HttpClient) { }

  createHeroe(heroe:HeroeModel) {
    return this.http.post(`${ this.url }/heroes.json`, heroe)
    .pipe(
      map((response:any) => {
        heroe.id = response.name;
        return heroe;
      })
    )
  }

  updateHeroe(heroe:HeroeModel) {

    const heroeTmp = {
      ...heroe // carga todas las propiedades del objeto sin necesidad de escribirlas todas
    };

    delete heroeTmp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTmp);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map((reponse:any) => this.createArrayOfHeroes(reponse))
      )
  }

  deleteHeroe(id:string) {
    return this.http.delete(`${this.url}/heroes/${ id }.json`);
  }

  getGeroe(id:string) {
    return this.http.get(`${this.url}/heroes/${ id }.json`);
  }

  private createArrayOfHeroes(heroesObj:object) {

    const heroes:HeroeModel[] = [];

    if (heroesObj === null) {
      return [];
    }

    Object.keys(heroesObj).forEach( key => {
      const heroe:HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    
    return heroes;  
  }

}
