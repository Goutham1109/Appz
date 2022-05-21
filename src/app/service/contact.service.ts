import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mycontact } from '../model/contacts/contacts';
import { GroupContact } from '../model/contacts/contactgroup';

// E:\Angular app idea\iideazz\src\app\model\contacts\contacts.ts
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = "http://localhost:4000"
  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.get<Mycontact[]>(`${this.url}/contacts`).pipe(catchError(this.handleError));
  }

  getContactById(id: string) {
    return this.http.get<Mycontact>(`${this.url}/contacts/${id}`).pipe(catchError(this.handleError));
  }

  addContact(contact: Mycontact) {
    return this.http.post<Mycontact>(`${this.url}/contacts`, contact).pipe(catchError(this.handleError));
  }

  updateContact(contact: Mycontact, id: string) {
    return this.http.put<Mycontact>(`${this.url}/contacts/${id}`, contact).pipe(catchError(this.handleError));
  }

  deleteContact(id: string) {
    return this.http.delete(`${this.url}/contacts/${id}`).pipe(catchError(this.handleError));
  }

  getAllGroup() {
    return this.http.get<GroupContact[]>(`${this.url}/group`).pipe(catchError(this.handleError));
  }

  getGroupById(id: Mycontact) {
    return this.http.get<GroupContact>(`${this.url}/group/${id.groupId}`).pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `Error: ${err.error.message}`;
    }
    else {
      errMsg = `Status: ${err.status} \n ${err.error.message}`;
    }
    return throwError(errMsg);
  }
}
