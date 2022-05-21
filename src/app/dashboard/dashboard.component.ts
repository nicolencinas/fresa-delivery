import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ClientHistorialComponent } from './shared/components/client-historial/client-historial.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() client:any=undefined; 
  clientStatus:boolean;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    this.clientStatus = this.client !== undefined
  }
  
  openClientHistorial(){
    const dialogRef = this.dialog.open(ClientHistorialComponent, {
      width: '90vw',
      height: "90vh",
      data: this.client
    });
  }

}
