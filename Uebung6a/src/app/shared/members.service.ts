import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  async getAllMembers(): Promise<Member[]> {
    let response = await fetch('../../assets/members.json')
    console.log('in service -> response', response)
    let members = await response.json();
    console.log('in service -> members', members)
    return members;
  }
}
