import { Component, OnInit, inject } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { MatTableModule } from '@angular/material/table';
import { User } from '../shared/user';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'username', 'email', 'role'];
  dataSource: User[] = [];

  ngOnInit(): void {
    this.readAllUsers()
  }
  bs = inject(BackendService)

  readAllUsers() {
    this.bs.getAllUsers().subscribe({
      next: (response) => {
        console.log(response)
        this.dataSource = response;
      },
      error: (err) => console.log(err),
      complete: () => console.log('readAll completed')
    })
  }

}
