import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';
  userFound: boolean = true
  constructor(private _Router: Router,) { }

  searchUsers() {
    if (this.searchTerm.trim() !== '') {
      this._Router.navigate(['/users', this.searchTerm.trim()])
    }
  }

  handleInput() {
    if (this.searchTerm.trim() !== '') {
      this.searchUsers();
    } else {
      this.clearSearch();
      this._Router.navigate(['/users'])
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.userFound = true;
  }

}
