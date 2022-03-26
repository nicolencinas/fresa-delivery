import { ClientService } from './../shared/clients-abm/client.service';
import { ConfirmComponent } from './../shared/confirm/confirm.component';
import { ClientsAbmComponent } from './../shared/clients-abm/clients-abm.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import clientes from '../../../assets/json/clientes.json'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  clients:any[] = []
  clientControl= new FormControl('',[Validators.required])
  selectedClient: any;

  constructor(private dialog:MatDialog,private clientService:ClientService) { }

  ngOnInit() {
    this.getClients()
  }
  getClients() {
    this.clientService.getClients().subscribe((res:any)=>{this.clients = res.items.docs;console.log(res.items.docs)})
      
  }

  validateClient(){
    console.log(this.clients)
    const client = this.clients.filter(client => client
       === this.clientControl.value )[0]
    if (client){
     this.selectedClient = client
    }
    else{
      this.selectedClient = undefined
      this.openConfirmAbmClient();
    }
    //this.selectedClient.next()
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
        telephone:this.clientControl.value
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
      } else {

      }

    });
  }

}


