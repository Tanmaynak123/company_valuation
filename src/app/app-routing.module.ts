import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },


  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CompanyListComponent, CompanyProfileComponent]

