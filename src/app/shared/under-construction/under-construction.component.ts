import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  public instruction:boolean=false;
  public aboutProject:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  public toggleInstruction():void{
    this.instruction = !this.instruction;
  }
  public toggleAboutProject():void{
    this.aboutProject = !this.aboutProject;
  }

}
