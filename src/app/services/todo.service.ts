import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO } from '../model/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
 apiUrl: string = 'http://localhost:3000/todos';



  constructor(private httpclient : HttpClient) { }


 // Read
 list(): Observable<TODO[]> {
    return this.httpclient.get<TODO[]>(`${this.apiUrl}`);
  }
  // Create
  create(data: any) {
    let API_URL = `${this.apiUrl}`;
    return this.httpclient.post<TODO[]>(API_URL, data)
}

  // Update
  update(id: any, data: any){
    let API_URL = `${this.apiUrl}/${id}`;
    return this.httpclient.patch<TODO[]>(API_URL, data)
  }
   // Delete
   delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.httpclient.delete<TODO[]>(API_URL)
  }
}
