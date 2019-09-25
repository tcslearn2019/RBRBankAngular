import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbarsegunda',
  templateUrl: './toolbarsegunda.component.html',
  styleUrls: ['./toolbarsegunda.component.css']
})
export class ToolbarsegundaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  sair(){
    this.router.navigate(['']);
  }
}
