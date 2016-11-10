import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './404/not-found.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    {
        path: 'project',
        loadChildren: 'app/project/project.module#ProjectModule'
    },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders  = RouterModule.forRoot(appRoutes);