import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private cryptoService:CryptoService) { }

  public isNikoladzeAnswerTrue(userAnswer):boolean{
    const encryptedAnswer = this.cryptoService.getNikoNikoladzeEncryptedAnswer();
    return this.isAnswerTrue(encryptedAnswer,userAnswer);
  }
  public isBarataiaAnswerTrue(userAnswer):boolean{
    const encryptedAnswer = this.cryptoService.getBaratiaEncryptedAnswer();
    return this.isAnswerTrue(encryptedAnswer,userAnswer);
  }
  public isMazniashviliAnswerTrue(userAnswer):boolean{
    const encryptedAnswer = this.cryptoService.getMazniashviliEncryptedAnswer();
    return this.isAnswerTrue(encryptedAnswer,userAnswer);
  }
  private isAnswerTrue(encryptedAnswer,userAnswer):boolean{
    const answer = this.cryptoService.getDecryptedText(encryptedAnswer);
    return answer === userAnswer;
  }
}
