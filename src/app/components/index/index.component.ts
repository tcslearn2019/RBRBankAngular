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
    console.log('clique dos detalhes');
    this.router.navigate(['userdetails']);
  }
  emprestimo() {
    console.log('clique');
    this.router.navigate(['loan']);
  }

  transferencia() {
    console.log('clique');
    this.router.navigate(['transfer']);
  }
  investmento() {
    console.log('clique');
    this.router.navigate(['investment']);
  }
}
