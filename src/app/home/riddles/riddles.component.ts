import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styleUrls: ['./riddles.component.scss'],
})
export class RiddlesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public navigateToMap(link): void {
    // window.location.href=link;
    window.open(link,'_blank');
  }
}
