import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.scss']
})
export class AddofficeComponent implements OnInit  {

  AddofficeForm: FormGroup;
  submitted = false;
  constructor(protected ref: NbDialogRef<AddofficeComponent>,private formBuilder: FormBuilder) { }
  cancel() {
    this.ref.close();
  
  }

  submit(name) {
    this.ref.close(name);
  }
 
  ngOnInit() {
    this.AddofficeForm = this.formBuilder.group({
      officename: ['', [Validators.required, Validators.minLength(50)]],
      ContactPerson: ['', [Validators.required, Validators.minLength(50)]],
      EmailId: ['', [Validators.required, Validators.email]],
      Address:['',[Validators.required, Validators.minLength(50)]],
      Country:['', Validators.required],
     });
    
  }
 // convenience getter for easy access to form fields
 get f() { return this.AddofficeForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.AddofficeForm.invalid) {
         return;
     }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.AddofficeForm.value))
 }

}
