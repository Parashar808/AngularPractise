import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  name="Rishi Raj Baral";
  number=108;
  phoneNumber=9841547151;
  changeNumber(){
    this.number=Math.random();
  }

  abc='x'

  updateData(item:string){
    console.warn(item);
    this.abc=item;
  }
  

  // userDetails=[
  //   {name:'Parashar',number:9860906599},
  //   {name:'Rishi',number:9841547151}
  // ]

  // show=true;


  // userData:any={}

  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data;
  // }

  // toggle(){
  //   this.show=!this.show;
  // }
  todolistedit:any[]=[];
  todolist:any[]=[];
  displayFunction(data:any){
    this.todolist.push({id:this.todolist.length,name:data})
    console.warn(this.todolist)
  }
 
  removeItem(data:any){
    console.warn(data)
    this.todolist=this.todolist.filter(item=>item.id!==data)

  }

  
}
