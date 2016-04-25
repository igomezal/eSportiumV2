import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PartidoService} from './partido.service';
import {Partido} from './partido.service';
import {Usuario, UsuarioService} from './usuario.interface';
import {CabeceraComponent} from './cabecera.component';
@Component({
    selector: 'partido-concreto',
    templateUrl : 'app/partido.component.html',
    directives: [CabeceraComponent]
})

export class PartidoComponent implements OnInit {
    partido:Partido;
        
    sesion:Usuario;
    admin:boolean;
    
    constructor(private _usuarioService:UsuarioService, private _partidoService:PartidoService, private _routeParams:RouteParams){
        
    }
    
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._partidoService.getPartido(id).subscribe(
            partido => this.partido = partido,
            error => console.log(error)
        );
        
        this._usuarioService.getSesion().subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );
            
        this._usuarioService.getAdmin().subscribe(
        admin => this.admin = admin,
        error => console.log(error)
        );
    }  
    
    login(nombre:string, clave:string){
        this._usuarioService.login(nombre,clave).subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );
        
        this._usuarioService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.log(error)
        );
        console.log(this.sesion);
    }
    
    actualizar(){
        this._usuarioService.getSesion().subscribe(
            usuario => this.sesion = usuario,
            error => console.log(error)
        );
        
        this._usuarioService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.log(error)
        );
    }
    
    apostar(apuesta:number){
        if(this.sesion.karma>=apuesta){
            this._usuarioService.apostar(this.partido,apuesta);
        }else{
            alert("Karma insuficiente");
        }
    }
}