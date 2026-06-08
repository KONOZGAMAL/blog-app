import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';

interface IArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
}

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app-category-filter.component.html',
  styleUrls: ['./app-category-filter.component.css'],
})
export class AppCategoryFilterComponent implements OnInit {
  activeCategory: string = 'all';
  categories: string[] = ['all', 'Tips', 'CSS', 'Angular', 'React'];

  articleService = inject(ArticleService);
  articles: IArticle[] = [];

  constructor(private router: Router) {}

  changeCategory(category: string) {
    this.activeCategory = category;
  }

  ngOnInit(): void {
    this.articles = this.articleService.getAll();
  }

  get filteredArticles() {
    if (this.activeCategory === 'all') {
      return this.articles;
    }
    return this.articles.filter(
      (article) => article.category.toLowerCase() === this.activeCategory.toLowerCase(),
    );
  }

  readMore(id: number) {
    this.router.navigate(['/article', id]);
  }
}
