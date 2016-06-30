import { Injectable, OnInit } from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';
import {Usuario} from './usuario.interface';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export interface User {
    id?: number;
    name: string;
    roles: string[];
}

@Injectable()
export class LoginService {

	isLogged = false;
	isAdmin = false;
	user: Usuario;

	constructor(private http: Http){
		this.reqIsLogged();
	}

  setUser(user: Usuario){
    this.user = user;
  }

  refresh(){
    let url = "https://localhost:8443/ref/";
    return this.http.get(url)
      .map(response => this.user = response.json())
      .catch(error => this.manejarError(error));
  }

	reqIsLogged(){

		let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});

		let options = new RequestOptions({headers});

		this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+
						JSON.stringify(error));
				}
			}
		);
	}

	private processLogInResponse(response){
		this.isLogged = true;
		this.user = response.json();
		this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
	}

	logIn(user: string, pass: string) {

		let userPass = user + ":" + pass;

		let headers = new Headers({
			'Authorization': 'Basic '+utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});

		let options = new RequestOptions({headers});

		return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.user;
			}
		);
	}

	logOut(){

		return this.http.get('logOut').map(
			response => {
				this.isLogged = false;
				this.isAdmin = false;
				return response;
			}
		);
	}
  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
