import {Partido} from './partido.service';
import {Juego} from './juego.interface';
import {Usuario} from './usuario.interface';
import {Jugador} from './jugador.interface';

export var JUEGOS: Juego[] = [
    {"nombre": "League of Legends","id": "lol"},
    {"nombre": "Counter Strike: GO","id": "cs"},
    {"nombre": "Call of Duty: BO3","id": "cod"},
];


export var JUGADORES: Jugador[] = [
  {"nombre": "Jug1", "posicion": "mid", "kda": 1.5},
  {"nombre": "Jug2", "posicion": "top", "kda": 2.5},
  {"nombre": "Jug3", "posicion": "jungle", "kda": 3.5},
  {"nombre": "Jug4", "posicion": "adc", "kda": 8.5},
]

export var PARTIDOS: Partido[] = [
  { "id":1, "eq1":"eq11","logo1": "c9Logo","eq2": "eq21", "logo2": "fnaticLogo","jug1": this.JUGADORES ,"jug2": this.JUGADORES ,"juego": this.JUEGOS[0].id,"estado": "directo", "diferencia": "800", "ganando": "eq2", "url": "https://www.youtube.com/embed/3EwuH3-xmds", "rondas": "BO5"},
  { "id":2, "eq1":"eq12","logo1": "fnaticLogo","eq2": "eq22", "logo2": "UOLLLogo","jug1": this.JUGADORES ,"jug2": this.JUGADORES ,"juego": this.JUEGOS[1].id,"estado": "directo", "diferencia": "14:0", "ganando": "eq2", "url": "https://www.youtube.com/embed/3EwuH3-xmds", "rondas": "BO5"},
  { "id":3, "eq1":"eq13","logo1": "UOLLogo","eq2": "eq23", "logo2": "nipLogo","jug1": this.JUGADORES ,"jug2": this.JUGADORES ,"juego": this.JUEGOS[0].id,"estado": "finalizado", "diferencia": "1000", "ganando": "eq2", "url": "https://www.youtube.com/embed/3EwuH3-xmds", "rondas": "BO5"},
  { "id":4, "eq1":"eq14","logo1": "nipLogo","eq2": "eq24", "logo2": "c9Logo","jug1": this.JUGADORES ,"jug2": this.JUGADORES ,"juego": this.JUEGOS[2].id,"estado": "directo", "diferencia": "2:0", "ganando": "eq2", "url": "https://www.youtube.com/embed/3EwuH3-xmds", "rondas": "BO3"},
  { "id":5, "eq1":"eq15","logo1": "c9Logo","eq2": "eq25", "logo2": "fnaticLogo","jug1": this.JUGADORES ,"jug2": this.JUGADORES ,"juego": this.JUEGOS[0].id,"estado": "directo", "diferencia": "1800", "ganando": "eq2", "url": "https://www.youtube.com/embed/3EwuH3-xmds", "rondas": "BO3"},
]

export var USUARIO: Usuario[] = [
  { "id":1 ,"name": "Pepe Lamela", "fecha": "23/03/1990","genero": "Hombre", "apuestas": [1,2,3], "finalizados" : [1,2], "karma": 1600, "foto": "../img/icon-profile.png", "clave": "1234", "correo": "fake@fake.es","admin":false},
]
