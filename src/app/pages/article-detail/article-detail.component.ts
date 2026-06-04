import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, IArticle } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent implements OnInit {
  article: IArticle | undefined;
  isOwner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.article = this.articleService.getById(id);

    const currentUser = localStorage.getItem('userName');
    this.isOwner = !!currentUser && this.article?.author === currentUser;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  deleteArticle() {
    if (!this.article) return;
    this.articleService.deleteArticle(this.article.id);
    this.router.navigate(['/']);
  }
  editArticle() {
    if (!this.article) return;
    this.router.navigate(['/edit', this.article.id]);
  }
}
