import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, IArticle } from '../../services/article.service';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css',
})
export class EditArticleComponent implements OnInit {
  articleData: IArticle | undefined = {
    id: 0,
    title: '',
    content: '',
    description: '',
    category: '',
    image: '',
    readTime: '',
    author: '',
  };

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.articleData = this.articleService.getById(id);
    console.log('data', this.articleData);
  }
}
