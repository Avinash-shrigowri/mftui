import { Observable } from 'rxjs/Rx';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { AppConstants } from '../../../app.constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '../../../services/http.service';
import { Subject } from "rxjs";
@Injectable()
export class GroupsService {
    rootSubject = new Subject<any>();
    rootSubject$ = this.rootSubject.asObservable();
    constructor(private http: Http, private constants: AppConstants, private httpClient: HttpClient) { }

    public getgroups(): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);

    }
    public  addgroup(data): Observable<Response> {
        if (!data.uuid) {
           
            let url: string = '' + this.constants.baseUrl + this.constants.groupLists;
            return this.httpClient.Post(url, data);
        } else {
            let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data.uuid;
            return this.httpClient.Put(url, data);
        }
    }
    public deletegroup(data): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data.uuid;
        return this.httpClient.Delete(url)

    }
    //to get files of groups
   public  setRootPage(uuid: string, name: string) {
         window.console.log(uuid);
        let groupdata = {
            uuid: uuid,
            name: name
        };
        window.console.log("hitted");
        this.rootSubject.next(groupdata);
    }
    public getentries(data): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.entries;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public postfile(file: any, data): Observable<Response> {
        // let url: string = '';

        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.entries;
        return this.httpClient.PostFormData(url, file)
        //     }
        // else{
        //     let url: string = '' + this.constants.baseUrl + this.constants.groupLists +data+ this.constants.entries+fileuuid;
        //     return this.httpClient.PutFormData(url, file)
        // }
    }
    public renamefile(file, data): Observable<Response> {

        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.entries + file.uuid;
        return this.httpClient.Put(url, file)

    }
    public deletefile(entryid, data): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.entries + entryid;
        return this.httpClient.Delete(url, data)

    }
    //Members
    public getmembers(data): Observable<Response> {
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.members;
        return this.httpClient.Get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public postmember(member: any, data): Observable<Response> {
        if (!member.userUuid) {
            let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.members;
            return this.httpClient.Post(url, member)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.members;
            return this.httpClient.Put(url, member)
                .map(this.extractData)
                .catch(this.handleError);
        }

    }

    public deletemember(member, data): Observable<Response> {
        // let url: string = '';
        let url: string = '' + this.constants.baseUrl + this.constants.groupLists + data + this.constants.members + member.uuid;
        return this.httpClient.Delete(url, data)

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