import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
   baseurl=this.authService.baseUrl+'/api/upload'
   constructor( private authService: AuthenticationService) {

    }
   
}