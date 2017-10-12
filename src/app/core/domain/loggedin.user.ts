export class LoggedInUser{
    constructor(access_token:string,username:string,fullName:string,email:string,avarta:string){
        this.access_token = access_token;
        this.fullName = fullName;
        this.email = email;
        this.avarta = avarta;
    }

    public id:string;
    public access_token:string;
    public username:string;
    public fullName:string;
    public email:string;
    public avarta:string;
}