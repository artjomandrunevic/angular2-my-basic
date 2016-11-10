import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/project';
import { UserService } from '../shared/services/project.service';


@Component({
    template: `
    <a (click)="goBack()" class="btn btn-sm btn-info">Back</a>
    <div *ngIf="user">
        <h1> {{ user.name}} ({{ user.username }})</h1>
        <img [src]="user.avatar" class="img-responsive img-circle">
    </div>
    `
})

export class DetailProjectComponent {
    user: User;

    constructor(
        private route: ActivatedRoute, 
        private service: UserService,
        private router: Router
        ) {}
    
    ngOnInit() {
        // grab the current username
        let username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(user => this.user = user);
    }

    goBack() {
        this.router.navigate(['/project']);
    }
};