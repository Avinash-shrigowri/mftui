import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { AppConstants } from '../../app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from './../../services/http.service';


@Injectable()
export class ConfirmationService {

    constructor(private http: Http, private constants: AppConstants, private httpClient: HttpClient) {}
    private token ='Basic cm9vdEBsb2NhbGhvc3QubG9jYWxkb21haW46YWRtaW5saW5zaGFyZQ==';
    
    public postConfirmation(values): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' ,'':''});
        let options = new RequestOptions({
            headers: headers
        });
        let url: string = '' + this.constants.baseUrl + this.constants.confirmation;
        
        return this.httpClient.Get(url)
                .map(this.extractData)
                .catch(this.handleError);;
            
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