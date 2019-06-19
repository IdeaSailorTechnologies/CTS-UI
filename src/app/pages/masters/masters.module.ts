import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule } from './masters-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddofficeComponent } from './office/addoffice/addoffice.component';
import { OfficeComponent } from './office/office.component';
import { UserComponent } from './user/user.component';
import { MastersComponent } from './masters.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';


const COMPONENTS = [
  MastersComponent,
 OfficeComponent,
 UserComponent,
 AddofficeComponent,
];

const ENTRY_COMPONENTS = [
  
  AddofficeComponent,

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
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class MastersModule { }
