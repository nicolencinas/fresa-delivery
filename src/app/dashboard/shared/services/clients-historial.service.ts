import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsHistorialService {

constructor(private http:HttpClient) { 
  
}

getClientHistorial(telephone:string):Observable<any[]>{
  return this.http.get<any>( `http://localhost:3001/historial/${telephone}`)
}

}
