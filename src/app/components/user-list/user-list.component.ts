import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: User[] = []
  isLoading: boolean = false
  currentPage: number = 1;
  pageSize: number = 6;
  totalUsers: number = 0;


  constructor(private _UsersService: UsersService) { }

  ngOnInit(): void {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      this.currentPage = +storedPage;
    }
    this.getUsers();
  }

  getUsers() {
    this._UsersService.getAllUsers(this.currentPage).subscribe({
      next: response => {
        this.usersList = response.data

        this.currentPage = response.page
        this.pageSize = response.per_page
        this.totalUsers = response.total

        this.isLoading = false
      },

      error: err => {
        console.log(err);
        this.isLoading = false

      }
    })
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getUsers()
    this.storeCurrentPage(page);
  }

  private storeCurrentPage(page: number) {
    localStorage.setItem('currentPage', page.toString());
  }

  ngOnDestroy(): void {
    localStorage.removeItem('currentPage');
  }

}
