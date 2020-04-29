import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { VotosComponent } from './pages/votos/votos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'votos', component: VotosComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
