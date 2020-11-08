import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel = new HeroeModel();
  peticionHttpOk:boolean = false;

  constructor(private heroeService:HeroesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.heroeService.getGeroe(id).subscribe((response:HeroeModel) => {
        this.heroe = response;
        this.heroe.id = id;
      });
    }
  }

  save(form:NgForm) {

    let peticionHttp: Observable<any>;

    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }

    if (this.heroe.id) {
      peticionHttp = this.heroeService.updateHeroe(this.heroe);
    } else {
      peticionHttp = this.heroeService.createHeroe(this.heroe);
    }

    peticionHttp.subscribe( reponse => {
      this.peticionHttpOk = true;
    });
  }
}
