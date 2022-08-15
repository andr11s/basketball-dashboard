import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = {
    apikey: environment.API_KEY,
    Authorization: environment.API_AUTHORIZATION
  }

  constructor(private httpClient: HttpClient) { }

  postUser(user: any) {

    return this.httpClient.post(`${environment.API_URL}/rest/v1/users`, user, { headers: this.headers })
  }
  
  getUsers(){
    // https://bsckarylzmwislehyxvj.supabase.co/rest/v1/users?select=type_user
    return this.httpClient.get(`${environment.API_URL}/rest/v1/users?select=1,type_user(id)`, { headers: this.headers })
  }
}
