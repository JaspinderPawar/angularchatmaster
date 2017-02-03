import { Component, Input } from '@angular/core';
import { TableComponent }   from '../shared/table.component';
import { ModifyUserComponent }   from '../home/modifyuser.component';
import { User } from '../models/user';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div >     
  <button id="btnModal" (click)="myModal.open()" [hidden]="true">open my modal</button>
    <modal #myModal>
        <modal-header>
            <h1>Add user</h1>
        </modal-header>
        <modal-content>
          <version-child ></version-child>
        </modal-content>
        <modal-footer>            
        </modal-footer>
    </modal>     
      <table-compo ></table-compo>
    </div>
  `
})
export class UserComponent {



    
}