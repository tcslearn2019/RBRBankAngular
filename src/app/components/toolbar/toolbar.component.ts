import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: User;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }
  index() {
    this.router.navigate(['index']);
  }
  redirecionamento(){
    console.log ('clique');
    this.router.navigate(['index']);
  }
}
