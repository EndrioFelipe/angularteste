import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //aqui é onde vão ficar os outros módulos que carregam componentes relacionados
    BrowserModule, //esse móduloe BrowserModule é carregado pelo Angular CLI
    PhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
