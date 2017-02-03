import { Component, Input, Output, EventEmitter, OnInit,  SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { EventService } from '../services/event.service';

@Component({
  selector: 'version-child',
  template: `
  
  <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
    <div class="form-group">
      <input type="text" placeholder="First Name" class="form-control" formControlName="firstname">
      <small [hidden]="myForm.controls.firstname.valid || (myForm.controls.firstname.pristine && !submitted)" class="text-danger">
           First Name is required (minimum 5 characters).
          </small>
      <!--<pre class="margin-20">{{ myForm.controls.name.errors | json }}</pre>-->
    </div>
    <div class="form-group" >
      <input type="text" placeholder="Last Name" class="form-control" formControlName="lastname">
      <small [hidden]="myForm.controls.lastname.valid || (myForm.controls.lastname.pristine && !submitted)" class="text-danger">
            Last name required
          </small>
    </div>
    <div class="form-group" >
      <input type="text" placeholder="User Name" class="form-control" formControlName="username">
      <small [hidden]="myForm.controls.username.valid || (myForm.controls.username.pristine && !submitted)" class="text-danger">
               User Name is required (minimum 7 characters).
          </small>
    </div>
    <div class="form-group" >
      <input type="password" placeholder="Password" class="form-control" formControlName="password">
      <small [hidden]="myForm.controls.password.valid || (myForm.controls.password.pristine && !submitted)" class="text-danger">
            Password required
          </small>
    </div>
    <div class="form-group" >
      <input type="text" placeholder="Street" class="form-control" formControlName="street">
      
    </div>   
    <div class="form-group" >
      <input type="text" placeholder="City" class="form-control" formControlName="city">  
       <small [hidden]="myForm.controls.city.valid || (myForm.controls.city.pristine && !submitted)" class="text-danger">
            City required
          </small>   
    </div>
    <div class="form-group" >
      <input type="text" placeholder="State" class="form-control" formControlName="state">  
       <small [hidden]="myForm.controls.state.valid || (myForm.controls.state.pristine && !submitted)" class="text-danger">
            State required
          </small>   
    </div>
        <div class="form-group" >
      <input type="text" placeholder="Post Code" class="form-control" formControlName="postcode">  
       <small [hidden]="myForm.controls.postcode.valid || (myForm.controls.postcode.pristine && !submitted)" class="text-danger">
            Post Code required
          </small>   
    </div>   
    <button type="submit" class="btn btn-default">Submit</button>
   
  </form>

  `,

})
export class ModifyUserComponent implements  OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  constructor(private _fb: FormBuilder, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.migrateDataEvent.subscribe(user => this.onEditUser(user));
    // the long way
    // this.myForm = new FormGroup({
    //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    //     address: new FormGroup({
    //         address1: new FormControl('', <any>Validators.required),
    //         postcode: new FormControl('8000')
    //     })
    // });

    // the short way
    this.myForm = this._fb.group({
      firstname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      lastname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      username: ['', [<any>Validators.required, <any>Validators.minLength(7)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      street: ['', []],
      city: ['', [<any>Validators.required]],
      state: ['', [<any>Validators.required]],
      postcode: ['', [<any>Validators.required]],

      // address: this._fb.group({
      //     street: ['', <any>Validators.required],
      //     postcode: ['8000']
      // })
    });




    // subscribe to form changes  
    this.subcribeToFormChanges();

    // Update single value
    // (<FormControl>this.myForm.controls['name'])
    //     .setValue('John', { onlySelf: true });

    // Update form model
    // const people = {
    // 	name: 'Jane',
    // 	address: {
    // 		street: 'High street',
    // 		postcode: '94043'
    // 	}
    // };

    // (<FormGroup>this.myForm)
    //     .setValue(people, { onlySelf: true });

  }
  private onEditUser(user: User) {
    console.log(user);
    const _user = {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password,
      street: user.street,
      city: user.city,
      state: user.state,
      postcode: user.postcode
    };
    (<FormGroup>this.myForm)
      .setValue(_user, { onlySelf: true });
  }

  subcribeToFormChanges() {
    // const myFormStatusChanges$ = this.myForm.statusChanges;
    // const myFormValueChanges$ = this.myForm.valueChanges;

    // myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    // myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    this.eventService.oprationCompleteEvent.emit(true);
    console.log(model, isValid);
  }
}