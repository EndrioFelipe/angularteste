import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Object[] = [ //isso aqui é um array. Foi criado para não encher demais o app.component com um monte de seletores 
    
  ];
  constructor(http: HttpClient){
    http
      .get<Object[]>('http://localhost:3000/flavio/photos') //tem que explicitar que vc quer q todos dados q virão via JSON se transformem em um array Object [], pq é o que o this.photos também é
      .subscribe(photos => this.photos = photos //o subscribe recebe 2 parâmetros, o primeiro é o array e o segundo é o tratamento de erro, mas não vamos mexer com isso agora
        );

  } //criando uma variável / aqui ele vai tentar importar uma coisa errada *Atenção* o correto está lá em cima
}
