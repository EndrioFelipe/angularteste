import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})

//basicamente esse PhotoFormComponent tá servindo como teste no app.routing.module q está designando o caminho 'p/add' para ele
export class PhotoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
