import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private url: string = 'https://financialmodelingprep.com/api/v3/search?query=&apikey=demo';
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

  getExchange() {
    return this.http.get(this.url);
  }

  getCompanyData(searchname, searchtopic, limit) {

    let url = "https://financialmodelingprep.com/api/v3/search?query=" + searchname + "&limit=" + limit + "&&exchange=" + searchtopic + "&apikey=demo";

    return this.http.get(url);

  }

  getCompanyProfile(searchcompany) {
    let urlProfile = "https://financialmodelingprep.com/api/v3/company/profile/" + searchcompany + "?apikey=demo";
    return this.http.get(urlProfile);
  }

}


