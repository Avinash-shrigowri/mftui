import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { AppConstants } from '../../../app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '../../../services/http.service';

@Injectable()
export class MyspaceService {

    constructor(private http: Http, private constants: AppConstants, private httpClient: HttpClient) { }


    public postfile(file: any): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.documents;
        return this.httpClient.PostFormData(url, file)

    }

    public editfile(file: any, document): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.documents + document.uuid + this.constants.upload;
        return this.httpClient.PutFormData(url, file)

    }

    public renamefile(document): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.documents + document.uuid;
        return this.httpClient.Put(url, document)

    }
    public getfile(): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.getDocuments;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);

    }


    public download(document): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.documents + document.uuid + this.constants.download;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);

    }

    public deletefile(document): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.documents + document.uuid;
        return this.httpClient.Get(url)

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