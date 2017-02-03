import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../app/home/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user/userprofile.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

// import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const AppRoutingModule = RouterModule.forRoot(routes);
export class AppRoutingModule { }