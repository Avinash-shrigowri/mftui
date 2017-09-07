import { Observable } from 'rxjs/Rx';
import { Injectable, Component } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable()
export class HttpClient {
    private localStorage: LocalStorageService;
    private token ='Basic cm9vdEBsb2NhbGhvc3QubG9jYWxkb21haW46YWRtaW5saW5zaGFyZQ==';
   // private token ='Basic cm9vdEBsb2NhbGhvc3QubG9jYWxkb21haW46YWRtaW5saW5lc2hhcmU=';
    constructor(private http: Http) {
        this.localStorage = new LocalStorageService();
    }

    Get(url: string,  options?: RequestOptionsArgs): Observable<Response> {
        if (navigator.onLine) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            
                headers.append('Authorization', this.token);
            let newOptions = new RequestOptions({
                headers: headers
            });
            return this.http.get(url, Object.assign({}, options, newOptions));
        } else {
            console.log('offline');

        }

    }

    Post(url: string, body: any,  options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
       
            headers.append('Authorization', this.token);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.post(url, body, Object.assign({}, options, newOptions));
    }
    


     PostFormData(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let formData:FormData = new FormData();
        formData.append('file', body);
        formData.append('filesize', body.size)
        let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
         headers.append('Authorization', this.token);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.post(url, formData, Object.assign({}, options, newOptions));
    }
     PutFormData(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let formData:FormData = new FormData();
        formData.append('file', body);
        formData.append('filesize', body.size)
        let headers = new Headers({ 'Authorization': this.token });
        
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.put(url, formData, Object.assign({}, options, newOptions));
    }


    Put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
            headers.append('Authorization', this.token);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.put(url, body, Object.assign({}, options, newOptions));
    }

    Delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
            headers.append('Authorization', this.token);
        let newOptions = new RequestOptions({
            headers: headers
        });
        return this.http.delete(url, Object.assign({}, options, newOptions));
    }
}
