import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  _base_url: any = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http: HttpClient) {

  }

  getTodos() {
   return this.http.get<any>(this._base_url)
     .pipe(map((res: any) => {
         return res;
    }))
  }
}
