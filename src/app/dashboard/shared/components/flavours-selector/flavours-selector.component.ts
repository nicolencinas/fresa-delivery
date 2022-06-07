import { FlavourService } from './../../services/flavour.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flavour } from '../../models/flavour';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../../models/client';
import { ClientHistorialComponent } from '../client-historial/client-historial.component';

@Component({
  selector: 'app-flavours-selector',
  templateUrl: './flavours-selector.component.html',
  styleUrls: ['./flavours-selector.component.scss']
})
export class FlavoursSelectorComponent implements OnInit {
  
  public flavours$ : Observable<Flavour[]>;
  public selectedFlavours:Flavour[] = [];

  constructor(private flavourService:FlavourService,
    public dialogRef: MatDialogRef<FlavoursSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public index: number) { }

  ngOnInit() {
    this.getFlavours();
  }
 getFlavours() {
  this.flavours$ = this.flavourService.getAvailableFlavours();
  }

  addFlavour(flavour:Flavour) {
    this.selectedFlavours.push(flavour)
  }

  deleteFlavour(index:number){
    this.selectedFlavours.splice(index,1);

  }

  acceptFlavours() {
    this.dialogRef.close({index:this.index,status:true,flavours:this.selectedFlavours})
  }

  cancelFlavours(){
    this.dialogRef.close({index:this.index,status:false,flavours:this.selectedFlavours})

  }
}

