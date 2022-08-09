import { Component, OnInit,Input,ChangeDetectorRef,Output, EventEmitter } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { Inject } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tasks:string;
  @Output() addTask:EventEmitter<any> = new EventEmitter
  constructor(private service:SharedService,private cdr:ChangeDetectorRef) { 
    this.tasks='';
  }

  ngOnInit(): void {
   
  }
prin()
{
  var val = {
    task:this.tasks
  }

  this.service.addTask(val).subscribe(res=>{
    
   this.addTask.emit(this.tasks)
   this.tasks = ''
  
  });
  
}
}
