import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../../photo/photo';

//esse Pipe tb precisa ser declarado em photos.module
@Pipe({
    name:'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
    
    transform(photos: Photo[], descriptionQuery: string) { //descriptionQuery recebe o que foi passado para o filter
        descriptionQuery = descriptionQuery
            .trim()   //remove os espaços vazios
            .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(photo =>   //filter é um método do javascript
                photo.description.toLowerCase().includes(descriptionQuery)  //pra cada foto, pega a description, joga pra lowercase e vê se tem dentro da string o que foi digitado
            );
        } else {
            return photos;
        }    
    }

}