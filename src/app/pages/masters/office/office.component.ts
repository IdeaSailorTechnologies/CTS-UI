import { Component  } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { AddofficeComponent } from './addoffice/addoffice.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-office',
  templateUrl: './office.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class OfficeComponent   {
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
      id: {
        title: 'ID',
        type: 'number',
      },
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
      Contact: {
        title: 'Contact Person',
        type: 'string',
      },
      Number: {
        title: 'Mobile Number',
        type: 'number',
      },
      Email: {
        title: 'Email-id',
        type: 'string',
      },
      UseAsWarehouse: {
        title: 'Use As Warehouse',
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
        title: 'pin',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  names: string[] = [];
  constructor(private service: SmartTableData,private addofficeService: NbDialogService) {
    const data = this.service.getOfficeData();
    this.source.load(data);
  }
  open3() {
    this.addofficeService.open(AddofficeComponent)
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


