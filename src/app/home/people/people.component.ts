import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public personList = [
    {person:"DAVID_KAKABADZE",imageSrc:"დავით კაკაბაძე.jpg",readMoreLink:"davit-kakabadze"},
    {person:"GIORGI_MAZNIASHVILI",imageSrc:"გიორგი მაზნიაშვილი.jpg",readMoreLink:"giorgi-mazniashvili"},
    {person:"RAMZE_BARATAIA",imageSrc:"რამზე ბარათაია 2.jpg",readMoreLink:"ramze-barataia"},
    {person:"NIKO_NIKOLADZE",imageSrc:"ნიკო ნიკოლაძე.jpg",readMoreLink:"niko-nikoladze"},
    {person:"SULKHAN_SABA",imageSrc:"სულხან-საბა_ორბელიანი.jpg",readMoreLink:"sulkhan-saba-orbeliani"},
    {person:"IVANE_MACHABELI",imageSrc:"ივანე მაჩაბელი.jpg",readMoreLink:"ivane-machabeli"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
