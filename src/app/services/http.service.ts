import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  post(url: string, data: any) {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }
  get(url: string): Observable<any> {
    return this.http.get(url);
  }
  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }
  delete(url: string, data?: any) {
    return this.http.delete(url, data);
  }

}