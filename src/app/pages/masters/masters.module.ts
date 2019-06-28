import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule } from './masters-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddofficeComponent } from './office/addoffice/addoffice.component';
import { OfficeComponent } from './office/office.component';
import { UserComponent } from './user/user.component';
import { MastersComponent } from './masters.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AddwarehouseComponent } from './warehouse/addwarehouse/addwarehouse.component';
import { UserroleComponent } from './userrole/userrole.component';
import { AdduserroleComponent } from './userrole/adduserrole/adduserrole.component';

const COMPONENTS = [
 MastersComponent,
 OfficeComponent,
 UserComponent,
 AddofficeComponent,
 CompanyProfileComponent,
 AdduserComponent,
 WarehouseComponent,
 AddwarehouseComponent,
 UserroleComponent,
 AdduserroleComponent,
];

const ENTRY_COMPONENTS = [
  
  AddofficeComponent,
  AdduserComponent,
  AddwarehouseComponent,
  AdduserroleComponent,
];

const MODULES = [
  ThemeModule,
  MastersRoutingModule,
  Ng2SmartTableModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
 
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    CompanyProfileComponent,
    UserComponent,
    AdduserComponent,
    WarehouseComponent,
    AddwarehouseComponent,
    UserroleComponent,
    AdduserroleComponent,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class MastersModule { }
