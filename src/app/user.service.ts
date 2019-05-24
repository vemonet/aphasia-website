import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private id: string;
  private oid: string;
  private oidProvider: string;
  private scientist: boolean;
  private scientists: [];
  username: string;
  createDateTime: any;
  updateDateTime: any;
  userID: string;

  constructor(private http: HttpClient) { }

  login() {
    const httpHeaders = new HttpHeaders({
      //'Content-type': 'application/x-www-form-urlencoded'
      'Accept': 'application/json'
    });
    this.http.get('/api/v1/getCurrentUser', { headers: httpHeaders})
      .subscribe(data => {
        this.username = data['userName'];
        this.id = data['id'];
        this.oid = data['oid'];
        this.oidProvider = data['oidProvider'];
        this.scientist = data['scientist'];
        this.scientists = data['scientists'];
        this.createDateTime = data['createDateTime'];
        this.updateDateTime = data['updateDateTime'];

        console.log('User data:');
        console.log(this);
      },
      err => console.log('User not logged'), // err => console.log(err),
    );
  }

  getAllUsers() {
    const httpHeaders = new HttpHeaders({
      //'Content-type': 'application/x-www-form-urlencoded'
      'Accept': 'application/json'
    });
    this.http.get('/api/v1/getAllUsers?page=1&pageSize=20')
      .subscribe(data => {
        console.log('All users:');
        console.log(data);
        //this.datasetsInfo.datasets = data['results']['bindings'];
      });
  }
}
