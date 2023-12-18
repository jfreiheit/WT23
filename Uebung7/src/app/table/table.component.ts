import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../shared/members.service';
import { NgFor } from '@angular/common';
import { Member } from '../shared/member';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ NgFor, ReactiveFormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  myservice = inject(MembersService);
  allMembers: Member[] = [];
  search = new FormControl('');

  async ngOnInit(): Promise<void> {
    this.allMembers = await this.myservice.getAllMembers()
    console.log('in table --> allMembers', this.allMembers)
  }

  filter() {
    console.log(this.search.value)
  }

}
