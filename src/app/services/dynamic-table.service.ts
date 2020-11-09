import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root', // service is registered in root module(app.module.ts) //
})
export class DynamicTableService {
  private url: any = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTableDatas() {
    return this.http.get(this.url); // fetching the data from REST api //
  }
}
