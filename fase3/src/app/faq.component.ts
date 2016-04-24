import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'faq',
    templateUrl : 'app/faq.component.html'
})

export class FaqComponent{
  constructor(private _router:Router){

  }

}
