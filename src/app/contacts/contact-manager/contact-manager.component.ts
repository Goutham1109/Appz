import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/app/model/contacts/contacts';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  loading: boolean = false;
  contacts: Mycontact[] = [];
  errMsg: string | null = null;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.contactService.getAllContacts().subscribe((contacts: Mycontact[]) => {
      this.contacts = contacts;
      this.loading = false;
      console.log(this.contacts)
    }, (error) => {
      this.errMsg = error;
      this.loading = false;
    })
  }

  delete(id: string | undefined) {
    if (id) {
      this.contactService.deleteContact(id).subscribe(() => {
        console.log('done');
        this.router.navigate(['/']);
        this.ngOnInit();
      })
    }

  }

}
