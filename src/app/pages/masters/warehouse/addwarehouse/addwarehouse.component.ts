import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-addwarehouse',
  templateUrl: './addwarehouse.component.html',
  styleUrls: ['./addwarehouse.component.scss']
})
export class AddwarehouseComponent implements OnInit {

  constructor(protected ref: NbDialogRef<AddwarehouseComponent>) { }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
  ngOnInit() {
  }

}
