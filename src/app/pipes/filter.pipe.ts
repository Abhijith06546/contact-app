import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchKey:string,properyName:string): any[] {
    // array after transform
    const result:any = []
     if(!allContacts || searchKey =='' || properyName == ''){
      return allContacts
     }
     allContacts.forEach((contact:any)=>{
      if(contact[properyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(contact)
      }
     })
    return result;
  }

}
