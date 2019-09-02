import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [ //isso aqui é um array. Foi criado para não encher demais o app.component com um monte de seletores 
    //é daqui que parte as informações que vão para a url e description que o photo.component está requisitando
  ];
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute //activateRoute indica qual é a rota ativada no momento
    ){ //vamos isolar esse acesso à api em uma classe de serviço PhotoService pra não ter que ficar colocando detalhes do acesso toda vez que formos acessar uma api
    //********************parte do código isolada em photo.service */
    // http
    //   .get<Object[]>('http://localhost:3000/flavio/photos') //tem que explicitar que vc quer q todos dados q virão via JSON se transformem em um array Object [], pq é o que o this.photos também é 
    //   .subscribe(photos => this.photos = photos //o subscribe recebe 2 parâmetros, o primeiro é o array e o segundo é o tratamento de erro, mas não vamos mexer com isso agora
    //     );
    //********************

    
    
  } //criando uma variável / aqui ele vai tentar importar uma coisa errada *Atenção* o correto está lá em cima
  
  ngOnInit(): void{ //a ideia do ngonInit() é deixar o construtor apenas com a função de injeção de dependência e a codificação ficar por aqui mesmo. Mas atenção, é preciso implementar o OnInit para o typescript poder reconhecer o ngOnInit().

      const userName = this.activatedRoute.snapshot.params.userName; //esse .userName vem do coringa q vc colocou em AppRoutingModule no path de photolistcomponent. Aqui ele usa qual é a rota ativada no momento com o activatedRout e designa a rota para o usuário correto.
      this.photoService.listFromUser(userName).subscribe(photos => this.photos = photos);
    
    }

}
