import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  pageEntry: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.pageEntry = false;
    }, 3000);
  }
}
