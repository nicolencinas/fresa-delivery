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

addClient(client:Client) {
  return this.http.post('http://localhost:3001/clients',client)
}
deleteClient(telephone: string) {
  return this.http.delete(`http://localhost:3001/clients/${telephone}`)
}

updateClient(telephone:string,client:Client){
  return this.http.put(`http://localhost:3001/clients/${telephone}`,client)
}
  
}

