import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GataService {

  constructor(private http:HttpClient) { }

  ChooseGet<Type>(url:string){
    return this.http.get<Type>(url);
  }
  AchievementGet<Type>(url:string){
    return this.http.get<Type>(url)
  }
  LinkGet<T>(url:string){
    return this.http.get<T>(url)
  }
  PersonGet<T>(url:string){
    return this.http.get<T>(url)
  }
}
