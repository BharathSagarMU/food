import { Injectable } from "@angular/core"

Injectable()
export class AuthServices {
    loggedIn: boolean = false 

    login(){
        this.loggedIn = true
    }

    logout(){
        this.loggedIn = false 
    }

    isAuthenticate(){
        return this.loggedIn
    }
}