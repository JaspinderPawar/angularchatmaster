import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
 import { HomeComponent }      from './home/home.component';
import { UserComponent }   from './home/user.component';
import { LoginComponent }   from './login/login.component';
import { ModifyUserComponent }   from './home/modifyuser.component';
import { UserProfileComponent }      from './user/userprofile.component';
import { ChatComponent } from './chat/chat.component';

import {AppRoutingModule} from './app-routing.module';
import {TableModule} from './shared/table.module';

//Services
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import {  UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { EventService } from './services/event.service'; 
import { ChatService } from './services/chat.service'; 
//import { UploadService } from './services/upload.service';
//import { EmojifyModule } from 'angular2-emojify'; 
//import { EmojiModule } from 'angular2-emoji';
  import { ImageUploadModule } from 'angular2-image-upload';
   


@NgModule({
  imports:      [ HttpModule,BrowserModule,FormsModule,ImageUploadModule.forRoot(),ReactiveFormsModule,ModalModule ,AppRoutingModule,TableModule],
  providers:    [ AuthGuard,  AuthenticationService, UserService,SessionService,EventService,ChatService],
  declarations: [ AppComponent,HomeComponent,UserComponent,LoginComponent,ModifyUserComponent,UserProfileComponent,
                  ChatComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
