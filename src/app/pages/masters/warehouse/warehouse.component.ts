import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from "../../../@core/data/smart-table";
import { AddwarehouseComponent } from './addwarehouse/addwarehouse.component';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

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
      // name: {
      //   title: 'Name',
      //   type: 'number',
      // },
      officeName: {
        title: 'Office Name',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
      Landmark: {
        title: 'Landmark',
        type: 'string',
      },
      Contactperson: {
        title: 'Contact Person',
        type: 'string',
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'string',
      },
      Emailid: {
        title: 'Email-Id',
        type: 'string',
      },
      Country: {
        title: 'Country',
        type: 'string',
      },
      State: {
        title: 'State',
        type: 'string',
      },
      City: {
        title: 'City',
        type: 'string',
      },
      Pin: {
        title: 'Pincode',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  names: string[] = [];

  constructor(private service: SmartTableData,private addwarehouseService: NbDialogService) {
    const data = this.service.getWarehouseData();
    this.source.load(data);
  }
  open3() {
    this.addwarehouseService.open(AddwarehouseComponent)
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
