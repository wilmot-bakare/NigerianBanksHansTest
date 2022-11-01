import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from '../models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
private url="Bank";
  constructor(private http: HttpClient) { }

  public getBanks(): Observable<Bank[]>{

    return this.http.get<Bank[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateBanks(bank:Bank): Observable<Bank[]>{

    return this.http.put<Bank[]>(
      `${environment.apiUrl}/${this.url}`, 
      bank
      );
  }

  public createBanks(bank:Bank): Observable<Bank[]>{

    return this.http.post<Bank[]>(
      `${environment.apiUrl}/${this.url}`, 
      bank
      );
  }

  public deleteBanks(bank:Bank): Observable<Bank[]>{

    return this.http.delete<Bank[]>(
      `${environment.apiUrl}/${this.url}/${bank.id}` 
      
      );
  }
}
