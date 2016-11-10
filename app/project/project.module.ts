import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { DetailProjectComponent } from './project-detail.component';
import { ProjectSectionComponent } from './project-section.component';
import { UserService } from '../shared/services/project.service';
import { projectRouting } from './project.routing';

@NgModule ({
    imports: [
        CommonModule,
        projectRouting
    ],
    declarations: [
        ProjectComponent,
        DetailProjectComponent, 
        ProjectSectionComponent       
    ],
    providers: [
        UserService
    ]
})

export class ProjectModule {}