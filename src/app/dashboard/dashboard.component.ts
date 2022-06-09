import { TicketComponent } from './dashboard-views/ticket/ticket.component';
import { ProductsService } from './dashboard-views/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from './shared/components/clients-abm/client.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientHistorialComponent } from './shared/components/client-historial/client-historial.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { ClientsAbmComponent } from './shared/components/clients-abm/clients-abm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() client:any=undefined; 
  @Output() resetClient:EventEmitter<boolean> = new EventEmitter()
  clientStatus:boolean;

  constructor(private dialog:MatDialog,private clientService:ClientService,private _snackbar:MatSnackBar,private router:Router,private productService:ProductsService) { }

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

  openConfirmDelete(telephone:string){
     const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '600px',
      data:
      {
      message:"¿Esta seguro que desea eliminar al cliente con el numero "+ telephone +"?",
      buttons:[
      {
        label:"Cancelar",
        buttonClass:"cancel",
        action:'cancel'
      },
      {
        label:"Aceptar",
        buttonClass:"accept",
        action:'accept'
      },

    ]
    }
    });

    dialogRef.afterClosed().subscribe(
      res =>{
        if (res){
          this.clientService.deleteClient(telephone).subscribe(
            res =>{
              if (res){
                this._snackbar.open('Se elimino el cliente correctamente','Aceptar',{panelClass:'success'})
                this.client = undefined
              } else {
                this._snackbar.open('NO se pudo eliminar el cliente','Aceptar',{panelClass:'success'})
                this.client = undefined

              }
            }
          )
          
        }
      }
    )
  }

  openEditClient(){
    const dialogRef = this.dialog.open(ClientsAbmComponent, {
      width: '600px',
      data:{
        client:this.client,
        edit:true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.resetClient.emit(true)
      } else {

      }

    });
  }

  openABM(){
    const dialogRef = this.dialog.open(ClientsAbmComponent, {
      width: '600px',
      data:{
        telephone:'',
        edit:false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.resetClient.emit(true)

      } else {

      }

    });
  }

  generateOrder(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['ticket']));
    window.open(url, '_blank'); 
   
  }

}
