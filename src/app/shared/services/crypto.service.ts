import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private _key:string="axjnqewkaT!2j913754xaxzvkdwa256zc3GikoD!@";

  public getEncryptedObject(text:string){
    const encrypted = CryptoJS.AES.encrypt(text, this._key);
    return encrypted;
  }

  public getDecryptedText(encryptedObject):string{
    const decrypted = CryptoJS.AES.decrypt(encryptedObject, this._key);
    return decrypted.toString(CryptoJS.enc.Utf8);;
  }
  public getNikoNikoladzeEncryptedAnswer(){
    return this.getEncryptedAnswerObject("POTI");
  }
  public getBaratiaEncryptedAnswer(){
    return this.getEncryptedAnswerObject("MARS");
  }
  public getMazniashviliEncryptedAnswer(){
    return this.getEncryptedAnswerObject("3C4B");
  }
  private getEncryptedAnswerObject(answer){
    return this.getEncryptedObject(answer);
  }
}
