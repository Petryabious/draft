import { Routes } from '@angular/router';

export const TOPICS_ROUTES: Routes = [
  {
    path: 'js',
    loadComponent: () => import('./js/js.component').then((m) => m.JsComponent),
    loadChildren: () => import('./js/js.routes').then((m) => m.JS_ROUTES),
  },
  {
    path: 'ts',
    loadComponent: () => import('./ts/ts.component').then((m) => m.TsComponent),
  },
  {
    path: 'angular',
    loadComponent: () =>
      import('./angular/angular.component').then((m) => m.AngularComponent),
  },
];
