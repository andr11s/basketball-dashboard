import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  formUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formUser = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      status: ['active']
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('user', this.formUser.value);
    this.userService.postUser(this.formUser.getRawValue()).subscribe(rep => {
      console.log('respuesta', rep);

    });
  }

}
