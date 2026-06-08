import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ArticleService, IArticle } from '../../core/services/article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  private articleService = inject(ArticleService);
  private router = inject(Router);

  allArticles: IArticle[] = [];
  searchQuery: string = '';
  activeCategory: string = 'all';
  categories: string[] = ['all', 'Angular', 'React', 'CSS', 'Tips'];

  ngOnInit() {
    this.allArticles = this.articleService.getAll();
  }

  get filteredArticles(): IArticle[] {
    return this.allArticles.filter((article) => {
      const matchesCategory =
        this.activeCategory === 'all' ||
        article.category.toLowerCase() === this.activeCategory.toLowerCase();

      const matchesSearch =
        this.searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  openArticle(id: number) {
    this.router.navigate(['/article', id]);
  }

  truncate(text: string, limit: number = 90): string {
    return text.length <= limit ? text : text.slice(0, limit) + '...';
  }
}
