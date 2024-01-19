import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").subscribe(response => console.log(response))
  }
}
