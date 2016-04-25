import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Component} from 'angular2/core';
// import {JUEGOS} from './mock-bdd.component/

@Component({
  selector:'juegointerface'
})

export class Juego {
  constructor (
    public nombre: string,
    public id: string
  ){}
}

@Injectable()
export class JuegoService{

constructor(){}

  private juegos =[
    new Juego('League of Legends','lol'),
    new Juego('Counter Strike: GO', 'cs'),
    new Juego('Call of Duty: BO3','cod'),
  ];

  getJuegos(){
    return withObserver(this.juegos);
  }

  getJuego(id: string){
    let j: Juego;
    for (var i = 0; i<this.juegos.length; i++){
      if(this.juegos[i].id == id){
        j = this.juegos[i];
      }
    }
    if (j.id == ""){
      alert("No existe el juego con id: "+id);
    }else{
      return withObserver(j);
    }
  }

  anadirJuego(j: Juego){
    this.juegos.push(j);
    return withObserver(this.juegos);
    //console.log(this.juegos);
  }

  editar(oldId: string, nombre: string, id: string){
    for(var i= 0; i< this.juegos.length; i++){
      if( this.juegos[i].id == oldId){
        this.juegos[i].nombre = nombre;
        this.juegos[i].id = id;
        alert("Juego editado");
        return withObserver(this.juegos[i]);
      }
    }
  }

  eliminar(nombre: string, id: string){
    for(var i= 0; i< this.juegos.length; i++){
      if( this.juegos[i].id == id){
        var r = confirm("¿Quieres borrar el juego "+this.juegos[i].nombre+"?");
        if (r == true){
          this.juegos.splice(i,1);
          alert("Juego eliminado");
          return withObserver(new Juego(nombre, id));
        }else{
          alert("Casi la lias");
        }
      }
    }
    alert("No existe ese juego");
  }
}
