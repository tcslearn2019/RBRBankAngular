import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cadastrar() {
    var ok;    
      if(confirm("Deseja confirmar?")) {        
        console.log('clique'); 
        this.router.navigate(['s']);
      if(ok == true){       
        this.router.navigate(['userdetails']);
      }    
    }    
  }
}
