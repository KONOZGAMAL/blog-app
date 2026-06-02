import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app-category-filter.component.html',
  styleUrls: ['./app-category-filter.component.css'],
})
export class AppCategoryFilterComponent {
  activeCategory: string = 'all';
  categories: string[] = ['all', 'Tips', 'CSS', 'Angular', 'React'];
  articles: IArticle[] = [
    {
      id: 2,
      category: 'Angular',
      title: 'بناء تطبيقات ضخمة بـ Angular',
      description: 'تعرف على كيفية تنظيم الكود وإدارة الحالات المعقدة في المشاريع الكبيرة.',
      image: './assets/images/unnamed.png',
      readTime: '5 دقايق',
    },
    {
      id: 1,
      category: 'CSS',
      title: 'أسرار CSS Grid الحديثة',
      description: 'توقف عن استخدام العائمات وابدأ في بناء شبكات مرنة واحترافية بسهولة.',
      image: './assets/images/css.png',
      readTime: '8 دقايق',
    },
    {
      id: 4,
      category: 'React',
      title: 'React 18: ما الجديد للمطور؟',
      description: 'شرح مبسط للميزات الجديدة مثل Concurrent Rendering و Suspense.',
      image: './assets/images/react.png',
      readTime: '7 دقايق',
    },
    {
      id: 3,
      category: 'Tips',
      title: '5 نصائح لزيادة إنتاجيتك',
      description: 'طرق فعالة لتنظيم يومك البرمجي وتقليل التشتت أثناء العمل عن بعد.',
      image: './assets/images/tips.png',
      readTime: '4 دقايق',
    },
  ];

  constructor(private router: Router) {}

  changeCategory(category: string) {
    this.activeCategory = category;
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
