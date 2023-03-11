import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';

const routes: Routes = [
  //All contacts Component
  {
    path:'',component:AllContactsComponent
  },
  //Add Contact Component
  {
    path:'add-contact',component:AddContactsComponent
  },
  //Edit Contact Component
  {
    path:'edit-contact/:id',component:EditContactsComponent
  },
  //view contact Component
  {
    path:'view-contact/:id',component:ViewContactsComponent
  },
  //page not found component
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
