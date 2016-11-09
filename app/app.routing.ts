import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { NotFoundComponent } from './404/not-found.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders  = RouterModule.forRoot(appRoutes);