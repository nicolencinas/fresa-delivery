import { HistoryDetailService } from './../../services/history-detail.service';
import { Client } from './../../models/client';
import { ClientsHistorialService } from './../../services/clients-historial.service';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import * as moment from 'moment';

@Component({
  selector: 'app-client-historial',
  templateUrl: './client-historial.component.html',
  styleUrls: ['./client-historial.component.scss']
})
export class ClientHistorialComponent implements OnInit {

  displayedColumns: string[] = ['date', 'total', 'pay', 'turned'];

  dataSource$:Observable<any>;
  constructor(
    public dialogRef: MatDialogRef<ClientHistorialComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Client,
    private clientHistorial:ClientsHistorialService,
    private historialDetail:HistoryDetailService) { }

  ngOnInit() {
    this.getClientHistorial()
  }

  getClientHistorial() {
    this.dataSource$ = this.clientHistorial.getClientHistorial(this.client.telephone).pipe(
      map(historial => historial.sort((a,b)=>{
        const timea = moment(a.date)
        const timeb = moment(b.date)
        return timeb.diff(timea)
      })))
    

    this.dataSource$.subscribe(console.log)
  }

  getHistorialDetail(id:number){
    this.historialDetail.getHistoryDetail(id).pipe(
      tap(console.log)
    );
  }

}
