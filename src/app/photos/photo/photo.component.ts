import { Component, Input } from '@angular/core';

@Component({
    selector: "ap-photo",
    templateUrl: "photo.component.html"
})
export class PhotoComponent {
    @Input() description=''; //Esse input é que vem da view pra cá
    @Input() url='';
}