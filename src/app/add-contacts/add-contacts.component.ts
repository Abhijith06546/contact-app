import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  
  groups:any =[]
  contact:Mycontact = {}
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId='Select a group'
  }
 ngOnInit(): void{
  this.api.allGroups()
  .subscribe((result:any)=>{
    console.log(result);
    this.groups=result
  })
 }

 //addContact
 addContact(contact:any){
  this.api.addContact(contact)
  .subscribe((data:any)=>{
    alert('New contact added successfully')
    //redirect to contact page
    this.addContactRouter.navigateByUrl('')
  })
 }

}
