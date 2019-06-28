import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from "../../../@core/data/smart-table";
import { AdduserroleComponent } from './adduserrole/adduserrole.component';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.scss']
})
export class UserroleComponent implements OnInit {

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
      Userrole: {
        title: 'User Role',
        type: 'string',
      },
      Createddate: {
        title: 'Created Date',
        type: 'string',
      },
      Createdby: {
        title: 'Created By',
        type: 'string',
      },
      
    },
  };
  source: LocalDataSource = new LocalDataSource();

  names: string[] = [];

  constructor(private service: SmartTableData,private adduserroleService: NbDialogService) {
    const data = this.service.getUserroleData();
    this.source.load(data);

  }

  open3() {
    this.adduserroleService.open(AdduserroleComponent)
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
