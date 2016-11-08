import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'project', component: ProjectComponent }

];

export const appRouting: ModuleWithProviders  = RouterModule.forRoot(appRoutes);