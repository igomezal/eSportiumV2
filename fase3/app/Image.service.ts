import {Component, OnInit, Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import 'rxjs/Rx';

export class Image {

  constructor(
    public description: string,
    public fileName: string
  ){}

}

@Injectable()
export class ImageService{

  constructor (private http:Http){}

  private imgs: string[] = [];

  loadImages(){
    let url = "https://localhost:8443/images/"
		return this.http.get(url)
      .map(response => response.json())
      .catch(error => this.manejarError(error))
		;
	}

  private manejarError(error:any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text);
  }

}
