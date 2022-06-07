import { ClientService } from './client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { delay, finalize, tap, timeout } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clients-abm',
  templateUrl: './clients-abm.component.html',
  styleUrls: ['./clients-abm.component.scss']
})
export class ClientsAbmComponent implements OnInit {

  clientControl: FormGroup;
  loadPostClient:boolean = false;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private clientService:ClientService) { }

  ngOnInit() {
    this.setUpForm()
    this.getClients();
  }

  getClients(){
    const clients = this.clientService.getClients()
  }

  setUpForm() {
    this.clientControl = this.fb.group(
      {
         name: new FormControl('',[Validators.required]),
         adress: new FormControl('',[Validators.required]),
         backStreet: new FormControl(''),
         buyCant: new FormControl(''),
         buyimport: new FormControl(''),
         cp: new FormControl(''),
         delivery: new FormControl(true),
         expirationDate: new FormControl(''),
         fault: new FormControl(''),
         locality: new FormControl(''),
         modifyDate: new FormControl(''),
         observation: new FormControl(''),
         street1: new FormControl(''),
         street2: new FormControl(''),
         telephone: new FormControl({value:this.data.telephone,disabled:this.data.edit},[Validators.required]),
         user: new FormControl(''),
      }
    )

    if(this.data.edit){
      this.clientControl.patchValue(this.data.client)
    }


  }

  openSnackBar(message:string,action:string,panelClass?:any) {
    this._snackBar.open(message,action,{duration:30000,horizontalPosition:"end",verticalPosition:"top",panelClass})
  }

  addClient(){
    this.loadPostClient = true;
    console.log(this.clientControl.value)
    this.clientService.addClient(this.clientControl.value).pipe(
      tap(console.log),
      delay(600),
      finalize(()=>{this.loadPostClient = false
      this.openSnackBar("Se creo el cliente correctamente","Aceptar",['success'])
      this.dialogRef.close(true)
      })
    ).subscribe(
      ()=>{console.log}
    )
  }

  editClient(){
    this.loadPostClient = true;
    console.log(this.clientControl.value)
    this.clientService.updateClient(this.data.client.telephone,this.clientControl.value).pipe(
      tap(console.log),
      delay(600),
      finalize(()=>{this.loadPostClient = false
      this.openSnackBar("El cliente se edito correctamente","Aceptar",['success'])
      this.dialogRef.close(true)
      })
    ).subscribe(
      ()=>{console.log}
    )
  }

}
