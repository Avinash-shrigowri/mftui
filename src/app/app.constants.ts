export class AppConstants {

    public readonly baseUrl: string = 'http://192.168.0.100:8080/linshare/webservice/rest/user/';
   // public readonly baseUrl: string = 'http://192.168.1.14/linshare/webservice/rest/user/';
    public readonly upload: string = '/upload';
    public readonly download: string = '/download';
    public readonly demoRequests: string = 'requestDemo';
    public readonly register: string = 'v2/registration';
    public readonly login: string = 'v2/authentication/authorized';
    public readonly documents: string = 'v2/documents/';
    public readonly getDocuments: string = 'v2/documents';
    public readonly groupLists: string = 'threads/';
    public readonly entries: string = '/entries/';
    public readonly members: string = '/members/';
    public readonly guests:string='guests';
}