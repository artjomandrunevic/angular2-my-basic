"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_service_1 = require('../shared/services/project.service');
var ProjectComponent = (function () {
    function ProjectComponent(service) {
        this.service = service;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().then(function (users) { return _this.users = users; });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project-page',
            styles: ["\n.profile-card { \n    background: #f3f3f3;\n    border-radius: 5px;\n    padding: 30px;\n    text-align: center;\n    }\n .profile-card img {\n     max-width: 50%;\n     margin: 20px auto;\n }   \n"],
            template: "\n    <div class=\"row\" *ngIf=\"users\">\n        <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n            <div class=\"profile-card\" [routerLink]=\"['/project', user.username]\">\n                <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n                <h2>{{ user.name }}</h2>\n                <p> {{ user.username }} </p>\n            </div>\n        </div>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [project_service_1.UserService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map