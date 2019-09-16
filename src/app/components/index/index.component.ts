import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detalhesConta() {
    console.log('clique');
    this.router.navigate(['userdetails']);
  }
  emprestimo() {
    console.log('clique')
    this.router.navigate(['loan']);
  }
}
