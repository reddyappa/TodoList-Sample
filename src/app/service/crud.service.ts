import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serverURL: any;
  constructor(private http: HttpClient) {
    this.serverURL = 'http://localhost:3000/tasks'
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serverURL, task)
  }
  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serverURL)
  }
  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.serverURL+'/'+task.id)
  }
 editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.serverURL+'/'+task.id, task)
  }

  



}
