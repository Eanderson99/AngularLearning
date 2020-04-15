import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    getName() {
        return new Promise((resolve, reject) => { // making fake service just for testing
            setTimeout(() => {
                resolve('mohamed')
            }, 1000)
        })
    }
}