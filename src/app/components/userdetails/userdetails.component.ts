import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  voltardetalhes() {
    console.log('clique')
    this.router.navigate(['index']);
  }
}
