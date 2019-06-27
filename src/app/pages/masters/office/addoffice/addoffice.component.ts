import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.scss']
})
export class AddofficeComponent implements OnInit  {

  officeForm: FormGroup;
  constructor(protected ref: NbDialogRef<AddofficeComponent>,private fb: FormBuilder) { }
  cancel() {
    this.ref.close();
  
  }

  submit(name) {
    this.ref.close(name);
  }

  ngOnInit() {
    this.officeForm = this.fb.group({
      officename: ['', Validators.required],
      Contact: ['', Validators.required],
    });
    
  }

  
  SaveOffice() {
    this.officeForm.markAsDirty();
  }


}
