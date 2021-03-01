import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'errorTranslator',
})
@Injectable({
  providedIn: 'root',
})
export class ErrorTranslatorPipe implements PipeTransform {

  private georgianErrors: Array<Error> = [
    { msg: 'Wrong email or password', msgToShow: 'არასწორი ელ. ფოსტა ან პაროლი'},
    { msg: 'Wrong password', msgToShow: 'პაროლი არასწორია'},
  ];
  private englishErrors: Array<Error> = [
    { msg: 'Wrong email or password', msgToShow: 'Wrong email or password'},
    { msg: 'Wrong password', msgToShow: 'Wrong Password'},
  ];

  constructor(private translateService: TranslateService) {}

  //იღებს ერორს ეძებს errors მასივში თუ არსებობს მსგავსი ერორი და აბრუნებს მის საჩვენებელ ვარიანტს.
  //თუ ვერ იპოვა მსგავსი ერორი, მაშინ აბრუნებს "მოხდა შეცდომა"
  transform(msg: string): string {
    let msgToShow = '';
    
    if (this.translateService.currentLang == 'ka') {
      for (const error of this.georgianErrors) {
        if (error.msg === msg) {
          msgToShow = error.msgToShow;
          break;
        }
      }
      if (msgToShow) {
        return msgToShow;
      } else {
        return 'მოხდა შეცდომა';
      }
    } else {
      for (const error of this.englishErrors) {
        if (error.msg === msg) {
          msgToShow = error.msgToShow;
          break;
        }
      }
      if (msgToShow) {
        return msgToShow;
      } else {
        return 'Something went wrong';
      }
    }
  }
}

export interface Error {
  msg: string;
  msgToShow: string;
}
