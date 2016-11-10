import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { DetailProjectComponent } from './project/project-detail.component';
import { NotFoundComponent } from './404/not-found.component';
import { UserService } from './shared/services/project.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ProjectComponent,
    NotFoundComponent ,
    DetailProjectComponent
    ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}