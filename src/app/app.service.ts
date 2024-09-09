import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { getBaserUrl } from './shared/utilities';

@Injectable({
  providedIn: 'root'
})
export class RESTService {

  private apiUrl = getBaserUrl();  // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to get data
  getData(path: string): Observable<any> {
    return this.http.get<any>(this.apiUrl+path);
  }

  // POST request
  createData(path: string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+path, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // PUT request
  updateData(path: string, id: number, data: any): Observable<any> {
    const url = `${this.apiUrl+path}/${id}`;
    return this.http.put<any>(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // DELETE request
  deleteData(path: string, id: number): Observable<any> {
    const url = `${this.apiUrl+path}/${id}`;
    return this.http.delete<any>(url);
  }
}
