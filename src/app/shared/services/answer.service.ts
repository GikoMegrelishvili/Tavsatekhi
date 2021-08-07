import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  public isNikoladzeAnswerTrue(userAnswer):boolean{
    const answers =["POTI","ᲤᲝᲗᲘ"]
    return this.isAnswerTrue(answers,userAnswer);
  }
  public isBarataiaAnswerTrue(userAnswer):boolean{
    const answers = ["MARS","MARSI","ᲛᲐᲠᲡᲘ","MARCI"];
    return this.isAnswerTrue(answers,userAnswer);
  }
  public isMazniashviliAnswerTrue(userAnswer):boolean{
    const answers = ["3C4B","4B3C","B4C3","C3B4"];
    return this.isAnswerTrue(answers,userAnswer);
  }
  public isKakabadzeAnswerTrue(userAnswer):boolean{
    const answers =[];
    return this.isAnswerTrue(answers,userAnswer);
  }
  public isMachabeliSabaAnswerTrue(userAnswer):boolean{
    const answers=["ᲚᲔᲥᲡᲘᲙᲝᲜᲘ","LEXICON","DICTIONARY","VOCABULARY","ᲪᲜᲝᲑᲐᲠᲘ"];
    return this.isAnswerTrue(answers,userAnswer);
  }
  private isAnswerTrue(answers,userAnswer):boolean{
    const isAnswerTrue = answers.includes(userAnswer);
    return isAnswerTrue;
  }
}
