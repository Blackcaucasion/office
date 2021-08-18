import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { homeModule } from './home/home.module';
import { AddOfficeModule } from './home/add-office/add-office.module';
import {AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { EditOfficeModule } from './home/edit-office/edit-office.module';
import { AddStaffModule } from './officeView/add-staff/add-staff.module';
import { OfficeViewModule } from './officeView/officeview/officeview.module';
import { ResponsiveModule } from 'ngx-responsive'
;
const config = {
  breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
  },
  debounceTime: 100
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    homeModule,
    AddOfficeModule,
    EditOfficeModule,
    OfficeViewModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ResponsiveModule.forRoot(config)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
