import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable()
export class AuthguardService {

  constructor(private http: HttpClient) { }
  public checkLogin():Observable<any> {
    return this.http.get(environment.host + "checklogin");
  }
}
