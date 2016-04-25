import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'pie',
    templateUrl : 'app/pie.component.html'
})

export class PieComponent{
  constructor(private _router:Router){
    
  }
  
  goToInicio(){
    this._router.navigate(['Inicio']);
  }
  
  goToSobre(){
    this._router.navigate(['Sobre']);
  }
  
  goToFAQ(){
      this._router.navigate(['FAQ']);
  }
  
  goToContacto(){
      this._router.navigate(['Contacto']);
  }
}