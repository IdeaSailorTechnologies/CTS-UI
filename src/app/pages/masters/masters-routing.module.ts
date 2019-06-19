import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersComponent } from './masters.component';
import { UserComponent } from './user/user.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [{
  path: '',
  component: MastersComponent,
  children: [{
    path: 'office',
    component: OfficeComponent,
  }, {
    path: 'user',
    component: UserComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRoutingModule { }
