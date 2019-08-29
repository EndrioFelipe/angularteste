import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
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
