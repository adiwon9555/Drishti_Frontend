import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
	URL='http://localhost:3000/';
   //URL='http://localhost:3000/';
  //URL='http://ec2-18-191-155-91.us-east-2.compute.amazonaws.com:80/';
  constructor(private http:HttpClient) { }
  
  getAllTasks():Observable<any>{
    return this.http.get<any>(this.URL+'task');
  }
  getImages(task):Observable<any>{
    return this.http.get<any>(this.URL+task);
  }
  submit(data):Observable<any>{
    console.log(data);
    
    return this.http.post<any>(this.URL+'sub',data);
  }
  
}