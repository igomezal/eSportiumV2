import {Component,AfterContentInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'faq',
    templateUrl : 'app/faq.component.html'
})

export class FaqComponent{
  constructor(private _router:Router){

  }
  
  ngAfterContentInit() {
       var h = document.createElement("script");
       h.type = "text/javascript";
       h.src = "js/script-responsive-faq.js";
       document.head.appendChild(h);
   }


}
