import { Component, OnInit } from '@angular/core';
//Importamos el Service
import { NoticiasAppleService } from 'src/app/services/noticias-apple.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticias-apple',
  templateUrl: './noticias-apple.page.html',
  styleUrls: ['./noticias-apple.page.scss'],
})
export class NoticiasApplePage implements OnInit {

  noticias: Article[] = []

  constructor(private noticiasApple: NoticiasAppleService) { }

  ngOnInit() {
    this.noticiasApple.getAppleNotices().subscribe(resp=>{
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    })
  }

}
