import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './404/not-found.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent ,
    ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}