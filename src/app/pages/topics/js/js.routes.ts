import { Routes } from '@angular/router';

export const JS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../../../shared/components/table-of-content/table-of-content.component'
      ).then((m) => m.TableOfContentComponent),
  },
  {
    path: 'functions',
    loadComponent: () =>
      import('./articles/functions/functions.component').then(
        (m) => m.FunctionsComponent
      ),
  },
];
