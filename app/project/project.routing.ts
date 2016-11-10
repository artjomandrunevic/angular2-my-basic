import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { DetailProjectComponent } from './project-detail.component';
import { ProjectSectionComponent } from './project-section.component';

const projectRoutes: Routes = [
    { 
        path: '', 
        component: ProjectSectionComponent,
        children: [
            {
                path: '',
                component: ProjectComponent
            },
            {
                path: ':username',
                component: DetailProjectComponent
            }
        ]
    }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild((projectRoutes); 