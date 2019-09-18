import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']  
})
export class LoanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancelar() {
    console.log('clique');
    this.router.navigate(['index']);
  }
}  