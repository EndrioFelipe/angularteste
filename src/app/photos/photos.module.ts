import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule(    //o que é passado aqui pra dentro é um objeto javascript / Esse NgModule serve pra criar um módulo que vai conter tudo o q tem a ver com photos e depois passar para o app.module. Fazemos isso pra não encher o app.module de componentes e fazer bagunça, pois assim deixamos componentes relacionados em conteiners como esse photos.module
    {
        declarations: [ PhotoComponent, PhotoListComponent ] ,
      //  exports: [ PhotoComponent ], //tem q declarar e exportar o componente / Não precisa mais exportar o PhotoComponet pq ninguém vai usar ele por enquanto. Antes que usava era o app module passando para o app component, agora o app componet não o utiliza mais.
        imports: [HttpClientModule, CommonModule] //CommonModule é para importar as diretivas do Angular. Poderíamos carregar Browsermodule tb, mas não podemos fazer isso em hipótese nenhuma.
    }
)

export class PhotosModule {

}