import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { AppConstants } from '../../app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from './../../services/http.service';

@Injectable()
export class LoginService {

    constructor(private http: Http, private constants: AppConstants, private httpClient: HttpClient) {}
     private token ='Basic cm9vdEBsb2NhbGhvc3QubG9jYWxkb21haW46YWRtaW5saW5zaGFyZQ==';
   public postlogin(values): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' ,'':''});
        let options = new RequestOptions({
            headers: headers
        });
         let url: string = '' + this.constants.baseUrl + this.constants.login+'?user='+ values.emailId+'&password=' +values.password;
         return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);
            
    }
    

    
    public postdemorequest(values: Object): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers
        });
        let url: string = '' + this.constants.baseUrl + this.constants.demoRequests;
        let body = JSON.stringify(values);
        return this.http.post(url, values, options)
            
    }

    public postregister(values: Object): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        let options = new RequestOptions({
            headers: headers
        });
        let url: string = '' + this.constants.baseUrl + this.constants.register;
        let body = JSON.stringify(values);
        return this.http.post(url, values, options)
            
    }
    

     private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        let err = JSON.parse(error._body);

        window.console.log(errMsg); // log to console instead
        return Observable.throw(err);
    }
}