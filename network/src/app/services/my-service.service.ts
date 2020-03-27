import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUsersResponse() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      observe: 'events', // options (returned data): body (default), response, events
      responseType: 'json', // options: json (default), text
      params: new HttpParams().set('userId', '1'), // like: ?userId=1
      //headers: (new HttpHeaders()). // we can add headers, Note: not all APIs has header
     });
  }

  addUser() {
    return this.http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify({
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
      }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
      }
      }));
  }

  deleteUser() {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/2');
  }

}