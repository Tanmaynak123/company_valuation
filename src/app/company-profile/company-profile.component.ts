import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  searchcompany;
  companiesProfile;
  filterdata: any;
  clear_filter: boolean = false;

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {

    this.companiesProfile = this.companiesService.getProfile();
    console.log(this.companiesProfile, "companies");

    this.companiesService.getProfile()
      .subscribe(
        response => {
          console.log(response);
          this.companiesProfile = response;
          this.filterdata = response;

        }, error => {
          alert("Upexpected Error in getCompanies")
          console.log(error);

        })
  }
  // getCompanyProfile() {
  //   // this.companiesProfile = this.companiesService.getProfile(this.searchcompany);
  //   // console.log(this.companiesProfile, "companies");

  //   this.companiesService.getCompanyProfile(this.searchcompany)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.companiesProfile = response;
  //         this.filterdata = response;

  //       }, error => {
  //         alert("Upexpected Error in getCompanies")
  //         console.log(error);

  //       })
  // }

  applyFilter() {
    console.log(this.searchcompany, "searchText ==>")
    if (this.searchcompany) {
      this.filterdata = this.companiesProfile.filter(data => {
        return (!data.name ? "" : data.name.toLowerCase().indexOf(this.searchcompany.toLowerCase()) >= 0);
      });
      this.clear_filter = true;
    } else {
      this.filterdata = this.companiesProfile;
      this.clear_filter = false;
    }
  }



  download() {
    window.open('https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?datatype=csv&apikey=demo&apikey=demo')
  }

}
