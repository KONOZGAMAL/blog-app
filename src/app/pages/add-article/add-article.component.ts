import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ArticleService } from '../../core/services/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  categories: string[] = ['Tips', 'CSS', 'Angular', 'React'];
  formBuilder = inject(FormBuilder);
  articleService = inject(ArticleService);
  toastr = inject(ToastrService);
  routerLink = inject(Router);

  articleForm = this.formBuilder.group({
    category: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    readTime: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  submitArticle(): void {

    if (!this.articleForm.valid) {
      this.toastr.error('يرجى ملء جميع الحقول بشكل صحيح');
      return;
  }

    const formValue = this.articleForm.value;
    const article = {
      id: Date.now(),
      category: formValue.category ?? '',
      title: formValue.title ?? '',
      description: formValue.description ?? '',
      image: formValue.imageUrl ?? '',
      readTime: formValue.readTime ?? '',
      content: formValue.content ?? '',
      author: localStorage.getItem('userName') ?? '',
    };
    this.articleService.addArticle(article);
    this.toastr.success('تم إضافة المقال بنجاح');
    this.routerLink.navigate(['/']);
  }
}
