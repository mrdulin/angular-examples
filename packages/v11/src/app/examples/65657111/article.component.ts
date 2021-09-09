import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articles',
  template: '<div>articles</div>',
})
export class ArticlesComponent implements OnInit {
  articles = [];
  filteredArticles = [];

  constructor(private _articleService: ArticleService) {}

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this._articleService.getEvents().subscribe(
      (res) => {
        this.articles = res;
        this.filteredArticles = res;
      },
      (err) => console.log(err)
    );
  }
}
