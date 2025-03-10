import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-of-content',
  standalone: true,
  imports: [],
  templateUrl: './table-of-content.component.html',
  styleUrl: './table-of-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentComponent {
  public currentUrl = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }
}
