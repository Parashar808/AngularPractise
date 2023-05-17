import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() item = "Default name ";
  // @Input() number1=0;
  // @Input() phonenumber=0; 

  // @Input() item:{name:string,number:number}={name:'',number:0};
  @Output() updateDataEvent=new EventEmitter<string>();
}
