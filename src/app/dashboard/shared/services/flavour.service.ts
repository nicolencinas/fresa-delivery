import { Flavour } from './../models/flavour';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {

constructor(private http: HttpClient) { }


getAvailableFlavours():Observable<Flavour[]>{
  return this.http.get<Flavour[]>('http://localhost:3001/flavours')
}
}
