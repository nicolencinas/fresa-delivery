import { HistoryDetailService } from './../../services/history-detail.service';
import { Client } from './../../models/client';
import { ClientsHistorialService } from './../../services/clients-historial.service';
import { Observable, of, ReplaySubject, zip } from 'rxjs';
import { map, mergeMap, tap, toArray} from 'rxjs/operators';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import * as moment from 'moment';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-client-historial',
  templateUrl: './client-historial.component.html',
  styleUrls: ['./client-historial.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientHistorialComponent {

  dataSource$:Observable<any>;
  collapsedStates: boolean[] = [];
  historialDetail$: Observable<any>
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
    
    this.dataSource$.subscribe(result =>{console.log(result);this.collapsedStates = result.map(() => false)});
  }

  getHistorialDetail(id:number) {
    
    const groupBy = (data, keyFn) => data.reduce((agg, item) => {
      const group = keyFn(item);
      agg[group] = [...(agg[group] || []), item];
      return agg;
    }, {});
    
    this.historialDetail$=this.historialDetail.getHistoryDetail(id).pipe(
      map(data => groupBy(data, item => item.order))
    )
    this.historialDetail$.subscribe(console.log)
  }
  

  columnsToDisplay = ['date', 'total', 'pay', 'turned','action'];
 
}
