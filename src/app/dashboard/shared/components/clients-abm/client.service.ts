import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

constructor(private http:HttpClient) { }

getClients():Observable<Client[]>{
  return this.http.get<Client[]>('http://localhost:3001/clients')
}

getClientByID(clientID:string):Observable<Client>{
  return this.http.get<Client>(`http://localhost:3001/clients/${clientID}`)
}
  
}

