import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector:'app-child',
    template: `<p> Child Template</p>
    <input type="text" [(ngModel)] = "cdata" (keyup) = "onChange(cdata)" />
    <button click = "clickReply()">Reply</button>
    <p>From Parent Data: {{parentData}} </p>`,
    
    styles: ['.primary {color:red} .active {background:blue}']
})
export class ChildComponent implements OnInit{
    @Input() parentData : string;
    @Output() childEvent = new EventEmitter();
    public cdata: string;
    
    constructor(){

    }
    ngOnInit(){

  
    }
    onChange(value:string){
        this.childEvent.emit(value);
    }
}