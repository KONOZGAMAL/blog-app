// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ArticleService, IArticle } from '../../services/article.service';

// @Component({
//   selector: 'app-article-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './article-detail.component.html',
//   styleUrl: './article-detail.component.css',
// })
// export class ArticleDetailComponent implements OnInit {
//   article: IArticle | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private articleService: ArticleService,
//   ) {}

//   ngOnInit() {
//     const idParam = this.route.snapshot.paramMap.get('id');
//     const id = Number(idParam);
//     this.article = this.articleService.getById(id);
//   }

//   goBack() {
//     this.router.navigate(['/']);
//   }
// }
