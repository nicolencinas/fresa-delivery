import { ProductsService } from './../dashboard-views/products.service';
import { ClientService } from '../shared/components/clients-abm/client.service';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';
import { ClientsAbmComponent } from '../shared/components/clients-abm/clients-abm.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  clients:any[] = []
  clientControl= new FormControl('4741-6096',[Validators.required])
  selectedClient: any;
  

  constructor(private dialog:MatDialog,private clientService:ClientService,private _snackBar: MatSnackBar,private productService:ProductsService) { }

  ngOnInit() {
    //this.getClients()
  }
  getClients() {
    this.clientService.getClients().subscribe((res:any)=>{this.clients = res})
  }

  validateClient(){

    this.clientService.getClientByID(this.clientControl.value).subscribe(
      client =>{
        if (client){
          this.selectedClient = client
          this.productService.setClient(client)
          this.openSnackBar('Se obtuvo el cliente con el numero '+client.telephone,"Aceptar",['success'])
         }
         else{
           this.selectedClient = undefined
           this.openConfirmAbmClient();
           this.openSnackBar("No se pudo obtener el cliente solicitado","Aceptar",['error']);

         }
      }
    )
  }

  resetClient(){
    this.validateClient()
  }

  openSnackBar(message:string,action:string,panelClass?:any) {
    this._snackBar.open(message,action,{duration:30000,horizontalPosition:"end",verticalPosition:"top",panelClass})
  }

  openConfirmAbmClient(){
       const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '600px',
      data:
      {
      message:"El número "+ this.clientControl.value+" no existe en la base de datos. ¿Desea agregrarlo?",
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

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.openABM()
      } else {

      }

    });
  }

  openABM(){
    const dialogRef = this.dialog.open(ClientsAbmComponent, {
      width: '600px',
      data:{
        telephone:this.clientControl.value,
        edit:false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.resetClient()
      } else {

      }

    });
  }



}


