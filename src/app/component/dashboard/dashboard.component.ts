import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskObj = new Task();
  taskArry: Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';
  constructor(private crudS: CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.getAllTask();
    this.taskArry = [];
  }
  getAllTask() {
    this.crudS.getAllTask().subscribe(res => {
      this.taskArry = res;
    }, error => {
      console.log(error)
    }
    )
  }
  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudS.addTask(this.taskObj).subscribe(data => {
      console.log("test", data);

    }, error => {
      console.log(error)
    })
  }
  deleteTask(etask: Task) {
    this.crudS.deleteTask(etask).subscribe(res => {
      this.ngOnInit()
    }, error => {
      console.log("Fail to delete task")
    })
  }
  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudS.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }
  call(etask: Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }
}
