import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  async getAllMembers(): Promise<Member[]> {
    let response = await fetch('./assets/members.json');
    console.log('response ', response);
    return response.json();
  }
}
