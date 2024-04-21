import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "https://reqres.in"

  constructor(private _HttpClient: HttpClient) { }

  getAllUsers(page: number): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/users?page=${page}`)
  }
}
