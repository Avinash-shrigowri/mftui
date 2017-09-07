import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { AppConstants } from '../../../app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '../../../services/http.service';
import { Subject } from "rxjs";
@Injectable()
export class AdministrationService {
    rootSubject = new Subject<any>();
    rootSubject$ = this.rootSubject.asObservable();
    constructor(private http: Http, private constants: AppConstants, private httpClient: HttpClient) { }


    public getguests(): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.guests;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);

    }


    public addingguest(data): Observable<Response> {
        if (!data.uuid) {
            let name = data.name;
            let url: string = '' + this.constants.baseUrl + this.constants.guests;
            return this.httpClient.Post(url, name);
        } else {
            let url: string = '' + this.constants.baseUrl + this.constants.guests + data.uuid;
            return this.httpClient.Put(url, data);
        }
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