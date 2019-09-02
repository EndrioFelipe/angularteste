import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = []; //esse input recebe o que vem de photos.component.html
  rows: any[] = []; //esse é o array qye é disponibilizado para a view photos.component.html

  constructor() { }

  //Por que usar OnChanges() e não OnInit()?
  // Vamos entender nosso problema: quando photo-list.component.ts é carregado, o valor de photos é um 
  // array vazio. Porém, a busca de dados é uma operação assíncrona, 
  // e demora milésimos de segundo até ser executada e lançar um novo valor. 
  // Então, quando photos começa com um array vazio, no template (photo-list.component.html) o 
  // Data binding para ap-photos (aquele '[photos]=photos') passa um array vazio também.
  // Significa que photos está vazio e, na inicialização do componente (photos.component), feita uma única vez, ele 
  // tentará acionar o groupColumns(). Será lançado um novo valor para o array em 
  // photo-list.component.ts, o qual automaticamente irá para photo-list.component.html, 
  // por conta do Data binding.
  // Este método 'ngOnChanges()' recebe como parâmetro todas as possíveis mudanças das inbound properties do 
  // nosso componente. Tais mudanças são do tipo SimpleChanges, que importaremos de angular/core. 
  // Caso haja alguma mudança, uma propriedade com mesmo nome da inbound property que sofreu a 
  // mudança será adicionada dinamicamente. Se não houver mudança, tampouco haverá propriedade.
  ngOnChanges(changes: SimpleChanges){
    // Um objeto do tipo SimpleChanges possui uma propriedade de mesmo nome da 
    // inbound property que sofreu mudança, ou seja, chamaríamos this.photos para referenciar o 
    // array de photos, mas podemos chamar o array photos com o objeto SimpleChanges, o 'changes'.
    if(changes.photos) this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]){
    const newRows = [];

    //aqui vamos fatiar o array em outros arrays com cada um com 3 photos.
    for(let index = 0; index < photos.length; index=index+3){
      newRows.push(photos.slice(index, index + 3)); //O slice() sempre recebe a posição inicial que queremos considerar, e a final não inclusiva, "fatiando" o array.
    }

    return newRows;

    //teremos como retorno desse método [photo0, photo1, photo2] [photo3, photo4. photo5] ...
  }

}
