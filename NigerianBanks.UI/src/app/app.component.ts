import { Component } from '@angular/core';
import { Bank } from './models/Bank';
import { BankService } from './services/bank-.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NigerianBanks.UI';
  banks: Bank[]=[];

  constructor(private bankService: BankService){}
  ngOnInit() : void{
   this.bankService
   .getBanks()
   .subscribe((result:Bank[]) =>(this.banks = result));

  }
}
