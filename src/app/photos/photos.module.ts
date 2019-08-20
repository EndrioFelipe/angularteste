import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule(    //o que é passado aqui pra dentro é um objeto javascript / Esse NgModule serve pra criar um módulo que vai conter tudo o q tem a ver com photos e depois passar para o app.module. Fazemos isso pra não encher o app.module de componentes e fazer bagunça, pois assim deixamos componentes relacionados em conteiners como esse photos.module
    {
        declarations: [ PhotoComponent ] ,
        exports: [ PhotoComponent ] //tem q declarar e exportar o componente
    }
)

export class PhotosModule {

}