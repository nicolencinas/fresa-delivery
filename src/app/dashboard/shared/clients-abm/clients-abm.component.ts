import { ClientService } from './client.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-clients-abm',
  templateUrl: './clients-abm.component.html',
  styleUrls: ['./clients-abm.component.scss']
})
export class ClientsAbmComponent implements OnInit {

  clientControl: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService:ClientService) { }

  ngOnInit() {
    this.setUpForm()
    this.getClients();
  }

  getClients(){
    const clients = this.clientService.getClients()
    clients.subscribe(console.log)
  }

  setUpForm() {
    this.clientControl = this.fb.group(
      {
         name: new FormControl(''),
         adress: new FormControl(''),
         backStreet: new FormControl(''),
         buyCant: new FormControl(''),
         buyimport: new FormControl(''),
         cp: new FormControl(''),
         delivery: new FormControl(''),
         expirationDate: new FormControl(''),
         fault: new FormControl(''),
         locality: new FormControl(''),
         modifyDate: new FormControl(''),
         observation: new FormControl(''),
         street1: new FormControl(''),
         street2: new FormControl(''),
         telephone: new FormControl(this.data.telephone),
         user: new FormControl(''),
      }

      
    )


  }

}
