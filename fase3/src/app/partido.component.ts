import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PartidoService} from './partido.service';
import {Partido} from './partido.service';

@Component({
    selector: 'partido-concreto',
    templateUrl : 'app/partido.component.html' 
})

export class PartidoComponent{
    partido:Partido;
    
    constructor(private _partidoService:PartidoService, private _routeParams:RouteParams ){
        
    }
    
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._partidoService.getPartido(id).subscribe(
            partido => this.partido = partido,
            error => console.log(error)
        );
        console.log(this.partido.jug1);
    }
    
}