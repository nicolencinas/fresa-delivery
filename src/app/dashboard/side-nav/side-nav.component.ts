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

  clients:any = clientes.filter(a=>a.telephone!=='');
  clientControl= new FormControl('',[Validators.required])
  selectedClient: any;

  constructor() { }

  ngOnInit() {
    console.log(this.clients)
  }

  validateClient(){
    const client = this.clients.filter(client => client.telephone.replace('-','') === this.clientControl.value )[0]
    if (client){
      console.log(this.selectedClient)
     this.selectedClient = client
    }
    //this.selectedClient.next()
  }

}
