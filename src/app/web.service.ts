import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from './interfaz/blogs.interface';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  constructor(private httpClient: HttpClient) { }

  serverUrl: string = "http://127.0.0.1:8000/api/"

  getCategoria(url: string): Observable<any> {
    return this.httpClient.get(this.serverUrl + url);
}
  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: Blogs): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: Blogs): Observable<any> {
      return this.httpClient.put(this.serverUrl + url+ '/'+ data.id, data);
  }

  delete(url: string, data: Blogs): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url + '/'+ data.id);
  }
}