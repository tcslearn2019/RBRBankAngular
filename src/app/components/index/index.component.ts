import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  //user: User;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detalhesConta() {
    this.router.navigate(['userdetails']);
  }
  emprestimo() {
    this.router.navigate(['loan']);
  }

  transferencia() {
    this.router.navigate(['transfer']);
  }
  investmento() {
    this.router.navigate(['investment']);
  }
}
