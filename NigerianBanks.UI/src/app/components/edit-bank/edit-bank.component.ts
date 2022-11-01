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
    this.bankService
    .updateBanks(bank)
    .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));
  }
  deleteBank(bank:Bank){
    this.bankService
    .deleteBanks(bank)
    .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));
  }
  createBank(bank:Bank){
    this.bankService
    .createBanks(bank)
    .subscribe((banks:Bank[])=> this.banksUpdated.emit(banks));
  }


}
