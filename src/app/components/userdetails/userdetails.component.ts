import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: User;
  constructor(private userservice: UserService, private router: Router ) { }

  
  ngOnInit() {
    this.user = this.userservice.getterUser();
  }
  voltardetalhes() {
    console.log('clique');
    this.router.navigate(['index']);
  }
}
