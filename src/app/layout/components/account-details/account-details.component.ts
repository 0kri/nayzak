import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  constructor(
    private _fb: FormBuilder
  ) { }
  
  accountDetailForm = this._fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    displayName: ['',[Validators.required]],
    email: ['',[Validators.required]],
    oldPassword: ['',[Validators.required]],
    newPassword: ['',[Validators.required]],
    repeatNewPassword: ['',[Validators.required]]
  })

}
