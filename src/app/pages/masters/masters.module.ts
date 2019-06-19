import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule, routedComponents } from './masters-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    ThemeModule,
    MastersRoutingModule,
    Ng2SmartTableModule,
  ],
})
export class MastersModule { }
