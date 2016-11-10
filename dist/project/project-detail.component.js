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
var router_1 = require('@angular/router');
var project_service_1 = require('../shared/services/project.service');
var DetailProjectComponent = (function () {
    function DetailProjectComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    DetailProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab the current username
        var username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(function (user) { return _this.user = user; });
    };
    DetailProjectComponent.prototype.goBack = function () {
        this.router.navigate(['/project']);
    };
    DetailProjectComponent = __decorate([
        core_1.Component({
            template: "\n    <a (click)=\"goBack()\" class=\"btn btn-sm btn-info\">Back</a>\n    <div *ngIf=\"user\">\n        <h1> {{ user.name}} ({{ user.username }})</h1>\n        <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, project_service_1.UserService, router_1.Router])
    ], DetailProjectComponent);
    return DetailProjectComponent;
}());
exports.DetailProjectComponent = DetailProjectComponent;
;
//# sourceMappingURL=project-detail.component.js.map