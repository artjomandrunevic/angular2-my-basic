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
var userPromise = Promise.resolve([
    {
        id: 1,
        name: 'Artjom',
        username: 'ardysvg',
        avatar: 'https://pbs.twimg.com/profile_images/651286640053219328/kIJwwAXL_400x400.png'
    },
    {
        id: 2,
        name: 'Alex',
        username: 'awasvg',
        avatar: 'https://pbs.twimg.com/profile_images/671662090214576128/2hwxTXn5_400x400.jpg'
    },
    {
        id: 3,
        name: 'Lino',
        username: 'soerenbutterson',
        avatar: 'https://pbs.twimg.com/profile_images/684637365978148864/uuJmpA4T_400x400.jpg'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return userPromise;
    };
    UserService.prototype.getUser = function (username) {
        return userPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=project.service.js.map