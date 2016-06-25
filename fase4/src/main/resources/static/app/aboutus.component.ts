import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'aboutus',
    templateUrl : 'app/aboutus.component.html'
})

export class AboutUsComponent{
  constructor(private _router:Router){

  }

}
