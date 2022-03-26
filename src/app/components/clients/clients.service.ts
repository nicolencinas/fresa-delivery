import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

constructor(private http:HttpClient) { }

public getClients():Observable<any>{
  return this.http.get('http://localhost:3001/clients')
}

} 

