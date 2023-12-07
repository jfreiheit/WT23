import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MyService } from './my.service';
import { Member } from './member';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'first';
  today = new Date();
  members: Member[] = [];


  constructor(private myservice : MyService) {}

  async ngOnInit(): Promise<void> {
    this.members = await this.myservice.getAllMembers();
    console.log('members', this.members)
  }

}
