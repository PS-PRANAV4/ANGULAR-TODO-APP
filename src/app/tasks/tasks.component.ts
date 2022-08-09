import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../shared.service';
import {Task} from '../inte'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  black:string = 'red'
  tasks:Task[]=[]
  name:string[] = []
  
  constructor(private service:SharedService,private cdr:ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.getTask();
  }
star:any[] = [{id:1,color:'black'},{id:2,color:'black'},{id:3,color:'black'},{id:4,color:'black'},{id:5,color:'black'},{id:6,color:'black'}]
getTask()
{
  
 this.service.getTask().subscribe(res=>{
  this.tasks = res;
  
  

  
  this.cdr.detectChanges();
  
 }); 
}
addTas(task:any)
{
  this.getTask();
}

delet(task:any)
{
this.service.deletTask(task).subscribe(res=>{
  console.log(res);
  this.getTask()

  
})

}
starClicked(item:number)
{
  
let y:number = 1
let z:number = 0

  this.star = this.star.reduce(function(acc:any,curr){

    console.log(item);
    
    if(curr.id>item)
    {
      acc[z] ={id:y,color:'red'} 
      
    }
    else
    {
      acc[z] ={id:y,color:'blue'}
    }
    y=y+1
    z=z+1
    return acc

  },[])



}



}
