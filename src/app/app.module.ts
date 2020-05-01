import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { VotosComponent } from './pages/votos/votos.component';
import { ComicsService } from './services/comics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagenesComponent,
    VotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
