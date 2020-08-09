import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CValuation';
  searchText: string = "Tanmay";

  dataSource: any = [];
  tableColumns: string[] = ['name', 'id', 'age', 'field', 'college'];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.queryParams.subscribe((people) => {
      // console.log(people, "PeopleDetailComponent ===>");
      // this.personalData = people;
      // console.log(this.dataSource, "dataSourceAbove");
      // this.dataSource.push(this.personalData);
      // console.log(this.dataSource.id, "dataSourceBelow");

    })
  }
}


