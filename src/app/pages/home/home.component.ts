import { Component, inject, OnInit } from '@angular/core';
import { AppFeaturedCardComponent } from '../../components/home/app-featured-card/app-featured-card.component';
import { AppArticleCardComponent } from '../../components/home/app-article-card/app-article-card.component';
import { AppCategoryFilterComponent } from '../../components/home/app-category-filter/app-category-filter.component';
import { ArticleService } from '../../core/services/article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AppFeaturedCardComponent,
    AppArticleCardComponent,
    AppCategoryFilterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articleService = inject(ArticleService);
  articlesNumber: number = 0;
    ngOnInit(): void {
    this.articlesNumber = this.articleService.getArticlesNumber();
  }

}
