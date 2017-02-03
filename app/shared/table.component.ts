import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
//import * as $ from 'jquery';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { User } from '../models/user';

@Component({
    selector: 'table-compo',
    templateUrl: 'app/shared/table.component.html',
})
//export class MasterComponent  { }
export class TableComponent implements OnInit {
    public data: any;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    @Output() onVoted = new EventEmitter<User>();

    constructor(private http: Http, private userService: UserService,private  eventService:EventService) {
    }

    
    onEditClick(user: User) {
        //console.log(user);
         this.eventService.migrateDataEvent.emit(user);
         document.getElementById("btnModal").click();
       // this.onVoted.emit(user);
        
    }
    


    //  Observable.interval(1000)
    //           .map((x) => x+1)
    //           .subscribe((x) => {
    //             this.message = x;
    //           }):

    ngOnInit(): void {
        this.eventService.oprationCompleteEvent.subscribe(event => this.onUpdateSuccess(event));
        //this.http.get("http://localhost:4000/api/wines")
        this.userService.getUsers()
            .subscribe((data) => {
                this.data = data;
            });

        // Observable.interval(500000)
        //             .subscribe((x) => {
        //                   this.http.get("http://localhost:4000/api/wines")
        //                     .subscribe((data)=> {
        //                         //setTimeout(()=> {
        //                             this.data = data.json();
        //                     // }, 1000);
        //                     });
        // });

    }
     private onUpdateSuccess(event) {
           //document.getElementById("myModal").clo
        }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}