import { Component, OnInit, ɵConsole } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel[] = [];
  loading:boolean = false;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    console.log(this.heroes.length);
    this.loading = true;
    this.heroesService.getHeroes()
    .subscribe(response => {
      this.heroes = response;
      this.loading = false;
    });
  }

  deleteHeroe(heroe:HeroeModel,i:number) {
    this.heroesService.deleteHeroe(heroe.id).subscribe();
    this.heroes.splice(i,1);
  }

}
