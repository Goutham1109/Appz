import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupContact } from 'src/app/model/contacts/contactgroup';
import { Mycontact } from 'src/app/model/contacts/contacts';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactData: Mycontact = {} as Mycontact;
  errmsg: string | null = null;
  loading: boolean = false;
  grpData: GroupContact = {} as GroupContact;
  id: string | null = null;
  grpDatas: GroupContact[] = [] as GroupContact[];

  constructor(private serv: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('contactId');
    })
    if (this.id != null) {
      this.serv.getContactById(this.id).subscribe((contact: Mycontact) => {
        this.contactData = contact;
        this.loading = false;
        this.serv.getGroupById(this.contactData).subscribe((data: GroupContact) => {
          this.grpData = data;
        })
      }, (error) => {
        this.errmsg = error;
        this.loading = false;
      })
    }
    this.serv.getAllGroup().subscribe((data: GroupContact[]) => {
      this.grpDatas = data;
    })
  }

  update() {
    if (this.id) {
      this.serv.updateContact(this.contactData, this.id).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

}
