
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })  //app.component não vai conseguir receber o fornecedor de HttpClient sem esse Injectable, isso vai tornar essa classe injetável lá no app.component. Esse { providedIn: 'root' } é o escopo de funcionamento dessa classe PhotoService, pois ao passar 'root' vc diz que qualquer outro componente poderá injetar essa classe.
export class PhotoService {
    
    constructor(private http: HttpClient){ //ao colocar um modificador de acesso, como o private ou public, vc disponibiliza essa variável 'http' para toda a classe, retirando a necessidade de fazer shadowing
    }
    
    listFromUser(userName: string){
        return this.http 
            .get<Photo[]>('http://localhost:3000/flavio/photos'); //tem que explicitar que vc quer q todos dados q virão via JSON se transformem em um array Object [], pq é o que o this.photos também é 
            //aqui não entra o .subscribe (q é quem realmente busca os dados da api), vamos deixar isso pra quem for usar esse método listFromUser()
         
    }
}