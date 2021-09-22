import { Injectable } from '@angular/core';
import { PeopleEnum } from 'src/app/shared/models/enums';

@Injectable({
  providedIn: 'root'
})
export class RiddleService {

  public markRiddleAsVisited(riddleName:PeopleEnum){
    localStorage.setItem(riddleName, "true");
  }
  public getIfRiddleWasVisited(riddleName:PeopleEnum){
    return localStorage.getItem(riddleName)? true : false;
  }
}
