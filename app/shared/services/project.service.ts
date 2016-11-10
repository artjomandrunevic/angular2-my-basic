import { Injectable } from '@angular/core';
import { User } from '../project/project';


const userPromise: Promise<User[]> =  Promise.resolve([
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
])



@Injectable()
export class UserService {

    getUsers() {
        return userPromise;
    }

    getUser(username) {

        return userPromise.then(users => users.find(user => user.username === username));

}