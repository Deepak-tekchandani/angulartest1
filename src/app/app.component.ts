import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deepak kumar';

  getName(name :String , number:number){
    alert(name);
    alert(number);
  }

  getData(name:string){
    console.warn(name);
  }

  displayVal:string='';
  getValue(val:string){

    console.warn(val)
    this.displayVal=val

  }

  count=0
  counter(type:string){
    type==='add' ? this.count++ : this.count--
  }

  name='Tekchandani'
  disable = false; 
}
