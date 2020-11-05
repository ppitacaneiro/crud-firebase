import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './page/heroe/heroe.component';
import { HeroesComponent } from './page/heroes/heroes.component';

const routes: Routes = [
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: '**', pathMatch : 'full', redirectTo: 'heroes'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports : [
    RouterModule
  ]
})

export class AppRoutingModule { }
