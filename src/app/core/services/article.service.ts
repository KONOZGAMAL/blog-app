import { Injectable } from '@angular/core';

export interface IArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  content: string;
  author?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: IArticle[] = [
    {
      id: Date.now(),
      category: 'CSS',
      title: 'أسرار CSS Grid الحديثة',
      description:
        'توقف عن استخدام العائمات وابدأ في بناء شبكات مرنة واحترافية بسهولة.',
      imageUrl: './assets/images/css.png',
      readTime: '8 دقايق',
      content: `CSS Grid هو نظام تخطيط ثنائي الأبعاد يتيح لك إنشاء تصميمات معقدة بسهولة تامة.

بدلاً من استخدام float أو position، يمكنك الآن تحديد صفوف وأعمدة وإضافة العناصر بدقة.

مثال بسيط:
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

هذا الكود يُنشئ شبكة من 3 أعمدة متساوية مع مسافة 16px بينها. جرّبها الآن!`,
      author: 'كنوز جمال',
    },
    {
      id: Date.now() + 2,
      category: 'Angular',
      title: 'بناء تطبيقات ضخمة بـ Angular',
      description:
        'تعرف على كيفية تنظيم الكود وإدارة الحالات المعقدة في المشاريع الكبيرة.',
      imageUrl: './assets/images/unnamed.png',
      readTime: '5 دقايق',
      content: `عند بناء تطبيقات ضخمة بـ Angular، التنظيم هو مفتاح النجاح.

أهم المبادئ:
- استخدم Feature Modules لتقسيم التطبيق لأجزاء مستقلة
- ضع منطق العمل في Services وليس في Components
- استخدم OnPush Change Detection لتحسين الأداء
- اعتمد على Lazy Loading لتحميل الصفحات عند الحاجة فقط

مثال على Lazy Loading في الـ Routes:
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}

هذا يجعل التطبيق أسرع لأن كود الـ admin لا يُحمَّل إلا عند الحاجة.`,
      author: 'كنوز جمال',
    },
    {
      id: Date.now() + 4,
      category: 'Tips',
      title: '5 نصائح لزيادة إنتاجيتك',
      description:
        'طرق فعالة لتنظيم يومك البرمجي وتقليل التشتت أثناء العمل عن بعد.',
      imageUrl: './assets/images/tips.png',
      readTime: '4 دقايق',
      content: `العمل عن بُعد يتطلب انضباطاً أكثر. إليك 5 نصائح مجربة:

1. حدد وقت بداية ونهاية ثابت للعمل — لا تعمل "طول اليوم"
2. استخدم تقنية Pomodoro: 25 دقيقة تركيز ثم 5 دقائق راحة
3. أغلق الإشعارات أثناء كتابة الكود — كل إشعار يكلفك 15 دقيقة تركيز
4. اكتب مهامك كل صباح بالترتيب — الأصعب أولاً
5. خصص مكاناً ثابتاً للعمل — الدماغ يربط المكان بالنشاط

هذه العادات البسيطة تضاعف إنتاجيتك خلال أسابيع.`,
    },
    {
      id: Date.now() + 6,
      category: 'React',
      title: 'React 18: ما الجديد للمطور؟',
      description:
        'شرح مبسط للميزات الجديدة مثل Concurrent Rendering و Suspense.',
      imageUrl: './assets/images/react.png',
      readTime: '7 دقايق',
      content: `React 18 جاء بتغييرات جوهرية في طريقة عمل المكتبة.

أهم الميزات الجديدة:

Concurrent Rendering: React يمكنه الآن إيقاف وإكمال عمليات الـ render حسب الأولوية، مما يجعل التطبيق أكثر استجابة.

Automatic Batching: تجميع تحديثات الـ State تلقائياً حتى خارج event handlers.

useTransition Hook: يتيح لك تمييز التحديثات "غير العاجلة" لتحسين تجربة المستخدم.

مثال:
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearchQuery(input);
});

Suspense for Data Fetching: عرض Fallback UI أثناء تحميل البيانات بشكل نظيف.`,
      author: 'كنوز جمال',
    },
  ];

  constructor() {
    const savedArticles = localStorage.getItem('articles');

    if (savedArticles) {
      this.articles = JSON.parse(savedArticles);
    } else {
      localStorage.setItem('articles', JSON.stringify(this.articles));
    }
  }

  getAll(): IArticle[] {
    return [...this.articles];
  }

  getById(id: number): IArticle | undefined {
    return this.articles.find((article) => article.id === id);
  }
  addArticle(article: IArticle) {
    this.articles.push(article);
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
  editArticleFun(updatedArticle: IArticle): void {
    const index = this.articles.findIndex((article) => article.id === updatedArticle.id);
    if (index !== -1) {
      this.articles[index] = updatedArticle;
      localStorage.setItem('articles', JSON.stringify(this.articles));
    }
  }
  deleteArticle(id: number): void {
    this.articles = this.articles.filter((article) => article.id !== id);
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  getArticlesNumber(): number {
    return this.articles.length;
  }
}
