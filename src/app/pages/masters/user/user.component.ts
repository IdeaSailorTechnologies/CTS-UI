import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from "../../../@core/data/smart-table";
import { AdduserComponent } from './adduser/adduser.component';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  
})
export class UserComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      contactnumber: {
        title: 'Contact Number',
        type: 'number',
      },
      Role: {
        title: 'Role',
        type: 'string',
      },
      
      Office: {
        title: 'Office',
        type: 'string',
      },
      Warehouse: {
        title: 'Warehouse',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  names: string[] = [];
  constructor(private service: SmartTableData,private addouserService: NbDialogService) {
    const data = this.service.getUserData();
    this.source.load(data);
  }
  open3() {
    this.addouserService.open(AdduserComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
  }

}