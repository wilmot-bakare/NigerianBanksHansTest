import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bank } from 'src/app/models/Bank';
import { BankService } from 'src/app/services/bank.service';


@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.css']
})
export class EditBankComponent implements OnInit {
@Input() bank?: Bank;
@Output() banksUpdated = new EventEmitter<Bank[]>();

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
  }

  updateBank(bank:Bank){
    
    if(this.validateBank(bank)){
      this.bankService
      .updateBanks(bank)
      .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));

    }
       alert("Success");
  }
  deleteBank(bank:Bank){
    this.bankService
    .deleteBanks(bank)
    .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));
    alert("Success");
  }
  createBank(bank:Bank){
    if(this.validateBank(bank)){
      this.bankService
      .createBanks(bank)
      .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));
    
    }
    alert("Success");
  }

  validateBank(bank:Bank){

    let isvalid = true;
    if (bank.name == "") {
      alert("Bank Name must be filled out");
      isvalid = false
    }
    else  if (bank.city == "") {
      alert("Bank city must be filled out");
      isvalid = false
    }
    else  if (bank.slogan == "") {
      alert("Bank slogan must be filled out");
      isvalid = false
    }
    else  if (bank.code == "") {
      alert("Bank code must be filled out");
      isvalid = false
    }
    return isvalid;
    }


}
