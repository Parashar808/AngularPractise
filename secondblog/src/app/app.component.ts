import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondblog';
  show=true;
  data1='yes';
  color="red";
  arrayExample=['Parashar','Pratisthit','Sulav','Nenu'];
  arrayExample2=['Anjal','Ashmita','Ranjeet'];

  arrayExample3=[
    {name:'Ram',address:'Ayodhya',phone:'111'},
    {name:'Sita',address:'Janakpur',phone:'222'}
  ]

  arrayExample4=[
    {name:'Rishi Raj Baral',phonenumber:['9841','9851']},
    {name:'Bina Baral',phonenumber:['9860','9850']}
  ]

  changecolor(){
    this.color='green';
  }

 
}
