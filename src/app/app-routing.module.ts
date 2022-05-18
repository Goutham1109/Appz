import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactManagerComponent } from './contacts/contact-manager/contact-manager.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { PgNotFoundComponent } from './contacts/pg-not-found/pg-not-found.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts/admin', pathMatch: 'full' },
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/view/:contactId', component: ViewContactComponent },
  { path: '**', component: PgNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
