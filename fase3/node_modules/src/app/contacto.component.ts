import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'contacto',
    templateUrl : 'app/contacto.component.html'
})

export class ContactoComponent{
  constructor(private _router:Router){

  }

}
