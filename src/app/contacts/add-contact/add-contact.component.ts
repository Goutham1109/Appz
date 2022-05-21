import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupContact } from 'src/app/model/contacts/contactgroup';
import { Mycontact } from 'src/app/model/contacts/contacts';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactData: Mycontact = {} as Mycontact;
  errmsg: string | null = null;
  loading: boolean = false;
  grpData: GroupContact[] = [] as GroupContact[];

  constructor(private serv: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.serv.getAllGroup().subscribe((data: GroupContact[]) => {
      this.grpData = data;
      console.log(this.grpData);
    })
  }

  save() {
    console.log(this.contactData)
    this.serv.addContact(this.contactData).subscribe((data) => {
      this.router.navigate(['/']);
    }, (error) => {
      this.router.navigate(['/contacts/add']);
    });
  }

}
