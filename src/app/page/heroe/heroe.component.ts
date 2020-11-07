import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel = new HeroeModel();

  constructor(private heroeService:HeroesService) { }

  ngOnInit(): void {
  }

  save(form:NgForm) {

    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }

    console.log(form);
    console.log(this.heroe);

    this.heroeService.createHeroe(this.heroe).subscribe( response => {
      console.log(response);
    });
  }

}
