import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/project';
import { UserService } from '../shared/services/project.service';


@Component({
selector: 'project-page',
styles: [`
.profile-card { 
    background: #f3f3f3;
    border-radius: 5px;
    padding: 30px;
    text-align: center;
    }
 .profile-card img {
     max-width: 50%;
     margin: 20px auto;
 }   
`],
template: `
    <div class="row" *ngIf="users">
        <div class="col-sm-4" *ngFor="let user of users">
            <div class="profile-card" [routerLink]="['/project', user.username]">
                <img [src]="user.avatar" class="img-responsive img-circle">
                <h2>{{ user.name }}</h2>
                <p> {{ user.username }} </p>
            </div>
        </div>
    </div>
`
})

export class ProjectComponent implements OnInit {
    users: User[];

    constructor(private service: UserService) {}

    ngOnInit() {
        this.service.getUsers().then(users => this.users = users);
    }
} 