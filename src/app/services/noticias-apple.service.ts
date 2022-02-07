import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiasApplePage } from '../pages/noticias-apple/noticias-apple.page';
import { NoticiasApple } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasAppleService {

  constructor(private http: HttpClient) { }

  //Metodo para traer API
  getAppleNotices(){
    return this.http.get<NoticiasApple>
    ('https://newsapi.org/v2/everything?q=apple&from=2021-11-22&to=2021-11-22&sortBy=popularity&apiKey=f7876ba2e849430992305fb42489e7d4')
  }
}
