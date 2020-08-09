import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompany } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private url: string = 'https://financialmodelingprep.com/api/v3/search?query=AA&limit=100&&exchange=NASDAQ&apikey=demo';
  public urlDownload = "https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?datatype=csv&apikey=demo";
  public urlProfile = 'https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=demo';

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get(this.url);
  }

  downloadCompany() {
    return this.http.get(this.urlDownload);
  }

  getProfile() {
    return this.http.get(this.urlProfile);

  }

}


