import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-manual',
  // template: "<p class = 'primary'>This is inline HTML</p>",
  // styles:[' .primary {color:red}']
  selector: 'app-manual',
  //template: '<button class = "btn btn-primary" [class.active] = "isActive"> Submit </button>',
  //template:`<button  [style.background] = "isActive ? 'blue' : 'gray'"> Submit </button>`,
  //template:`<button click = "onClick()">Submit1</button><button click = "onClick()">Submit2</button>`,
  template: `<p>Parent Template</p><input type = "text" [(ngModel)] = "pdata"/>
    <button click = "clickSend()">Send</button>
    <p>Data from Child: {{cdata}} </p>
    <hr /> 
    <app-child (childEvent) = "cdata=$event" [parentData] ="pdata"></app-child>
    `,
  styles: ['.primary {color:red} .active {background:blue}']
})
export class ManualComponent implements OnInit{
  isActive = true;
  public pdata : string;
  public cdata : string;

  constructor(){

  }
  ngOnInit(){
  }

  clickSend(){
    
  }
}

