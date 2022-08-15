import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

interface LoginUser {
  name: string;
  email: string;
  password: string;
  status: string;

}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  formUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formUser = this.formBuilder.group<LoginUser>({
      name: '',
      email: '',
      password: '',
      status: 'active'
    })
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(c=> {

        console.log('ee', c);
        
      })
  }

  onSubmit() {
    console.log('user', this.formUser.value);
    const a = this.formUser.getRawValue();
    this.userService.postUser(this.formUser.getRawValue()).subscribe(rep => {
      console.log('respuesta', rep);

    });
  }

}
