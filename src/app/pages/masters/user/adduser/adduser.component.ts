import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'ngx-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(protected ref: NbDialogRef<AdduserComponent>) { }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
  ngOnInit() {
  }

}