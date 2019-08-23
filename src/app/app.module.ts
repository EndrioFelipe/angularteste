import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
//import { HttpClient, HttpClientModule } from '@angular/common/http'; //esse import tem que fazer na mão pq o angular não fornece

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //aqui é onde vão ficar os outros módulos que carregam componentes relacionados
    BrowserModule, //esse móduloe BrowserModule é carregado pelo Angular CLI
    PhotosModule,
    //HttpClientModule  //tem que importar o módulo do HttpClient que vai fornecê-lo a nós / HttpClientModule foi retirado daqui e passado para Photos.Module, que é quem de fato tá precisando desse troço atualmente
    AppRoutingModule, //designa as rotas. / às vezes o angular cli fica doido ao importar as rotas, então reinicie o servidor
    ErrorsModule //carrega as páginas q não tem nada
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
