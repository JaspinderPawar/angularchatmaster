import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { TableComponent }   from './table.component';
import { DataFilterPipe }   from './data-filter.pipe';

//import { ModifyUserComponent }   from '../home/modifyuser.component';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ TableComponent, DataFilterPipe ],
  exports: [TableComponent]
})

export class TableModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/