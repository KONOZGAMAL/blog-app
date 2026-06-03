import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'add', component: AddArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
