import { Injectable } from '@angular/core';
import { Bank } from '../models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  public getBanks(): Bank[]{
    let bank= new Bank();
    bank.id = 1;
    bank.name="Sterling Bank";
    bank.city="Lagos";
    bank.code="STB";
    bank.slogan="Your One Customer Bank";

    return [bank]
  }
}
