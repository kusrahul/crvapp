import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //apiUrl = 'https://crvacationing.checkfront.com/api/3.0/category';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getToken(credentials:any) {
    return new Promise((resolve, reject) =>{
    this.http.post('https://api.payments.4geeks.io/authentication/token/', JSON.stringify(credentials)).
    subscribe(res =>{
      resolve(res);
    }, (err) =>{
      reject(err);
    });
    });
  }

  getUser(credentials:any, token:any) {
    return new Promise((resolve, reject) =>{
    let headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });  
    this.http.post('https://api.payments.4geeks.io/v1/charges/simple/create/', JSON.stringify(credentials), {headers}).
    subscribe(res =>{
      resolve(res);
    }, (err) =>{
      reject(err);
    });
    });
  }

}
