import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NavbarComponent } from './contacts/navbar/navbar.component';
import { ContactManagerComponent } from './contacts/contact-manager/contact-manager.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { SpinnerComponent } from './contacts/spinner/spinner.component';
import { PgNotFoundComponent } from './contacts/pg-not-found/pg-not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    ViewContactComponent,
    EditContactComponent,
    SpinnerComponent,
    PgNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
