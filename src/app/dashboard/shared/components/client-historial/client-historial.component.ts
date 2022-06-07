import { CODES } from './codes';
import { FlavourService } from './../../services/flavour.service';
import { Flavour } from './../../models/flavour';
import { HistoryDetailService } from './../../services/history-detail.service';
import { Client } from './../../models/client';
import { ClientsHistorialService } from './../../services/clients-historial.service';
import { Observable, of, ReplaySubject, zip } from 'rxjs';
import { groupBy, map, mergeMap, reduce, tap, toArray} from 'rxjs/operators';

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
  historialDetails$: Map<number,Observable<any>> = new Map<number,Observable<any>>()
  orders:any[] = []
  flavours:Flavour[];
  itemCodes = CODES;
  constructor(
    public dialogRef: MatDialogRef<ClientHistorialComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Client,
    private clientHistorial:ClientsHistorialService,
    private historialDetail:HistoryDetailService,
    private flavourService:FlavourService) { }

  ngOnInit() {
    this.getClientHistorial()
    this.getFlavours()
  }

  getFlavours(){
    this.flavourService.getAvailableFlavours().subscribe(data => this.flavours = data)
  }
  diccionary(type:string,cod:string) {
    
    if(type === 'flavour') {
      const flavour = this.flavours.find(a => a.cod === cod) 
      return flavour ? flavour.description : 'Sin gustos'
    }
  }
  showData(data:any){
    console.log(data)
  }
  getClientHistorial() {
    this.dataSource$ = this.clientHistorial.getClientHistorial(this.client?.telephone).pipe(
      map(historial => historial.sort((a,b)=>{
        const timea = moment(a.date)
        const timeb = moment(b.date)
        return timeb.diff(timea)
      })))
    
    this.dataSource$.subscribe(result =>{this.collapsedStates = result.map(() => false)});
  }

  getHistorialDetail(id:number) {
    
    // const groupBy = (data, keyFn) => data.reduce((agg, item) => {
    //   const group = keyFn(item);
    //   agg[group] = [...(agg[group] || []), item];
    //   console.log(agg)
    //   return agg
    // }, []);
    
    // const history=this.historialDetail.getHistoryDetail(id).pipe(
    //   map(data => groupBy(data, item => item.order)),
    //   // tap(result => result.shift())
    // )
    // history.subscribe(console.log)
    // this.historialDetails$.set(id,history);

    const history = this.historialDetail.getHistoryDetail(id).pipe(
      mergeMap((historiales: any) => historiales),
      groupBy((historial: any) =>
        historial.order
      ),
      mergeMap(group => group.pipe(toArray())),
      reduce(
        (acc: any, curr: any) =>  [
          ...acc,
          {
            product:curr[0].cod,
            flavours: [...curr],
          },
        ],
        []
      )
    );
    this.historialDetails$.set(id,history)
  }

  showOrder(order:any){
    console.log(order)
  }

  traduceCod(cod:any){
    return this.itemCodes[cod];
  }
  

  columnsToDisplay = ['date', 'total', 'pay', 'turned','action'];

  collapsedRow(index:number){

    if (this.collapsedStates[index]) {
      this.collapsedStates[index] = false;
    }
    else{
      for(let i=0;i<this.collapsedStates.length;i++){
        this.collapsedStates[i] = false;
    }
    this.collapsedStates[index] = true
    }
  }
  
}


