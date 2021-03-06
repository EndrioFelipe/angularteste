import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';


//Esse resolver vai servir para não aparecer mais aquele "Sorry, no photos" antes de preenchimento da lista
//tem q colocar esse resolver em app.routing.module
@Injectable({ providedIn: 'root' }) //requisita o root pra poder calcular a rota
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    
//esse 'Resolve' devolveria um tipo genérico, por isso precisamos colocar <Observable<Photo>> que é o mesmo retorno do método listFromUser() de photo.service. para conferir, passe o mouse em cima do método listFromUser().   

    constructor (private service: PhotoService) {
        
    }

    //ActivatedRouteSnapshot: tira uma fotografia do que está acontecendo na rota naquele momento
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        const userName = route.params.userName; //aqui passa a fotografia tirada pelo ActivatedRouteSnapshot como parâmetro para userName
        return this.service.listFromUser(userName);
    }
    
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    //     const userName = route.params.userName;
    //     return this.service.listFromUser(userName);
    //   }


}