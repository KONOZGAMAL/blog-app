import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailComponent , title: 'تفاصيل المقال'},
  { path: 'edit/:id', component: EditArticleComponent , title: 'تعديل المقال' , canActivate: [authGuard]},
  { path: 'add', component: AddArticleComponent , title: 'إضافة مقال جديد' , canActivate: [authGuard]},
  { path: 'login', component: LoginComponent , title: 'تسجيل الدخول'},
  { path: 'register', component: RegisterComponent , title: 'التسجيل'},
  { path: '**', component: NotFoundComponent , title: 'الصفحة غير موجودة'}
];
