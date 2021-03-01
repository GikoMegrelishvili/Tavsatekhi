import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {

  @Input() text:string;
  @Input() image:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
