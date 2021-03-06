import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [ //importar esse Routes faz com q os objetos javascript sejam colocados da forma correta e acuse erros caos vc escreva o nome do objeto errado, como 'componet' ao invés de 'component'.  //esse é um array javascript dentro dele vou colocar objetos javascript que vai designar uma rota para cada componente
    {path: 

        'user/:userName',
        component: PhotoListComponent,
        resolve: { //aqui o resolver que vai servir para carregar a lista antes da página ser carregada
            photos: PhotoListResolver
        }
    },
    {path: 'p/add', component: PhotoFormComponent}, //pra isso que serve o PhotoFormComponent, teste de rota
    {path: '**', component: NotFoundComponent}
  
] 
//esse coringa ':userName' faz com que qualquer coisa que esteja depois de /user como /user/xxx seja uma rota válida. Este coringa está sendo usado em photo-list.component na const userName.  

@NgModule({
    imports: [RouterModule.forRoot(routes)], //aqui é o senguinte, pra fazer a ligação entre a const routes e a classe AppRoutingModule, é preciso colocar esse .forRoot(routes). Além de fazer a ligação, ele vai carregar a rota root 'localhost:4200' e o restante da url colocadas nos objetos javascript. Depois de fazer isso, faça a importação de AppRoutingModule em app.module
    exports: [ RouterModule ] //aqui passa todas as diretivas e tags do RouterModule pra todo mundo que importar AppRoutingModule, como está fazendo o app.module
})
export class AppRoutingModule {

}