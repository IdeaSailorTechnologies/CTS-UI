import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'ngx-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.scss']
})
export class AddofficeComponent   {

  constructor(protected ref: NbDialogRef<AddofficeComponent>) { }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

  ngOnInit() {
  }

}
