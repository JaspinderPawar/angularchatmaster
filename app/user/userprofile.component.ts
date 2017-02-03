import { Component, Input, Output, EventEmitter, OnInit,  SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { EventService } from '../services/event.service';

@Component({
  selector: 'user-profile',
  templateUrl:'app/user/userprofile.component.html'
    
  
})
export class UserProfileComponent implements OnInit {     
  public myForm: FormGroup;
  public submitted: boolean;
  constructor(private _fb: FormBuilder, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.migrateDataEvent.subscribe(user => this.onEditUser(user));
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
    });
    // subscribe to form changes  
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

  save(model: User, isValid: boolean) {
    this.submitted = true;
    this.eventService.oprationCompleteEvent.emit(true);
    console.log(model, isValid);
  }
}