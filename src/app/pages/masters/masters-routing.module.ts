import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersComponent } from './masters.component';
import { UserComponent } from './user/user.component';
import { OfficeComponent } from './office/office.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
const routes: Routes = [{
  path: '',
  component: MastersComponent,
  children: [{
    path: 'office',
    component: OfficeComponent,
  }, {
    path: 'user',
    component: UserComponent,
  },{
    path: 'Company-Profile',
    component: CompanyProfileComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRoutingModule { }
