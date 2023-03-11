import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {

  contactId:string=''
  contact:Mycontact = {}
  allGroups:any
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private editContactRouter:Router){    
  }
  ngOnInit(): void {
    //to get path parameter from url
    this.editContactActivatedRoute.params
    .subscribe((data:any)=>{
      this.contactId=data.id
      console.log(this.contactId);            
    })
    //to get details of a particular contact
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      this.contact=result
      console.log(this.contact);
      
    })

    //get all groups from api
    this.api.allGroups()
    .subscribe((groups:any)=>{
      console.log(groups);
      this.allGroups=groups
      
    })
  }
  //edit contact(contact)
  editContact(contact:Mycontact){
    this.api.updateContact(this.contactId,contact)
    .subscribe((result:any)=>{
      alert('Contact updated')
      //redirect to all contact
      this.editContactRouter.navigateByUrl('')
    })
  }

}
