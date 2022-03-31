import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryDetailService {

constructor(private http:HttpClient) { }
 
getHistoryDetail(id:number){
  return this.http.get<any>( `http://localhost:3001/history-detail/${id}`)
}
}
