import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../../core/services/article.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css',
})
export class EditArticleComponent implements OnInit {
  categories: string[] = ['Tips', 'CSS', 'Angular', 'React'];
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}
  formBuilder = inject(FormBuilder);
  toastr = inject(ToastrService);
   routerLink = inject(Router);

  editArticleForm = this.formBuilder.group({
    category: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    imageUrl: [
      '',
      [Validators.required, Validators.pattern(/\.(jpg|jpeg|png)$/i)],
    ],
    readTime: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    const article = this.articleService.getById(id);

    if (article) {
      this.editArticleForm.patchValue(article);
    } else {
      this.toastr.error('Article not found');
    }
  }
    submitArticle(): void {
    if (!this.editArticleForm.valid) {
      this.toastr.error('يرجى ملء جميع الحقول بشكل صحيح');
      return;
  }

      const formValue = this.editArticleForm.value;
    const article = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      category: formValue.category ?? '',
      title: formValue.title ?? '',
      description: formValue.description ?? '',
      imageUrl: formValue.imageUrl ?? '',
      readTime: formValue.readTime ?? '',
      content: formValue.content ?? '',
      author: localStorage.getItem('userName') ?? '',
    };
    this.articleService.editArticleFun(article);
    this.toastr.success('تم تحديث المقال بنجاح');
    this.routerLink.navigate(['/']);
}
}
