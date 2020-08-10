import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  searchname;
  searchtopic;
  showTable: boolean = false;
  showSpinner: boolean = false;
  limit;
  companies: any = [];
  dataSource;
  exchanges: any = [];
  filterdata: any;
  clear_filter: boolean = false;

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.companies = this.companiesService.getCompany();
    // console.log(this.companies, "companies");

    // this.companiesService.getCompany()
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.companies = response;
    //       this.filterdata = response;

    //       this.getExchange();

    //     }, error => {
    //       alert("Upexpected Error in getCompanies")
    //       console.log(error);

    //     })
    this.getExchange();

  }

  getCompanyData() {
    this.companiesService.getCompanyData(this.searchname, this.searchtopic, this.limit)
      .subscribe(
        response => {
          console.log(response);
          this.companies = response;
          this.filterdata = response;

          this.getExchange();

        }, error => {
          alert("Upexpected Error in getCompanies")
          console.log(error);

        })
  }

  // Exchange Select
  getExchange() {
    this.companiesService.getExchange()
      .subscribe(
        (companies: any) => {
          if (companies) {
            companies.forEach(element => {
              if (this.exchanges.indexOf(element.exchangeShortName) === -1) this.exchanges.push(element.exchangeShortName);
            });
          }
        }, error => {
          alert("Upexpected Error in getCompanies")
          console.log(error);

        }
      )
  }

  //Download Statement
  download() {
    window.open('https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?datatype=csv&apikey=demo&apikey=demo')
  }


  //Search Company filter
  applyFilter() {
    // if ((this.searchname && this.searchname != 'select') && (this.searchtopic && this.searchtopic != 'select')) {
    //   this.filterdata = this.companies.filter(data => {
    //     return ((!data.name ? "" : data.name.toLowerCase().indexOf(this.searchname.toLowerCase()) >= 0) && (!data.stockExchange ? "" : data.stockExchange.toLowerCase().indexOf(this.searchtopic.toLowerCase()) >= 0));
    //   });
    //   this.clear_filter = true;
    // } else if (this.searchname && this.searchname != 'select') {
    //   this.filterdata = this.companies.filter(data => {
    //     return (!data.name ? "" : data.name.toLowerCase().indexOf(this.searchname.toLowerCase()) >= 0);
    //   });
    //   this.clear_filter = true;
    // } else if (this.searchtopic && this.searchtopic != 'select') {
    //   this.filterdata = this.companies.filter(data => {
    //     return (!data.stockExchange ? "" : data.stockExchange.toLowerCase().indexOf(this.searchtopic.toLowerCase()) >= 0);
    //   });
    //   this.clear_filter = true;
    // } else {
    //   this.filterdata = this.companies;
    //   this.clear_filter = false;
    //   alert("Please select compay name or stock exchange");
    // }
    // this.ref.detectChanges();
    this.showTable = true;
    this.getCompanyData();

  }

  clearFilter() {
    this.filterdata = this.companies;
    this.searchname = "";
    this.searchtopic = 'select';
    this.clear_filter = false;
  }

}
