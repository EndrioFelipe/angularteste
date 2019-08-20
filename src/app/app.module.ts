import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //esse import tem que fazer na mão pq o angular não fornece

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //aqui é onde vão ficar os outros módulos que carregam componentes relacionados
    BrowserModule, //esse móduloe BrowserModule é carregado pelo Angular CLI
    PhotosModule,
    HttpClientModule  //tem que importar o módulo do HttpClient que vai fornecô-lo a nós
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
