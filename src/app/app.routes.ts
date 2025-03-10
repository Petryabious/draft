import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'topics',
    loadComponent: () =>
      import('./pages/topics/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    loadChildren: () =>
      import('./pages/topics/topics.routes').then((m) => m.TOPICS_ROUTES),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
