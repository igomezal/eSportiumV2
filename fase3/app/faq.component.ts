import {Component,AfterContentInit} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector:'faq',
    templateUrl : 'app/faq.component.html',
    directives: [ROUTER_DIRECTIVES]
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
   goToContacto(){
     let link = ['Contacto'];
     this._router.navigate(link);
   }

}
