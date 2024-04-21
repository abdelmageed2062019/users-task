import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserDataService } from 'src/app/services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = {} as User;
  error: string = '';
  isLoading: boolean = false


  constructor(private _UserDataService: UserDataService, private _ActivatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        let userId: any = param.get("id");
        this._UserDataService.getUser(userId).subscribe({
          next: response => {
            this.user = response.data;
            this.isLoading = false;
          },

          error: err => {
            console.log(err);
            this.error = 'User not found';
            this.isLoading = false
          }
        })
      }
    })

  }

  goBack(): void {
    this._router.navigate(['/users']);
  }

}
