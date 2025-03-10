import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { TableOfContentComponent } from '../../../shared/components/table-of-content/table-of-content.component';

@Component({
  selector: 'app-ts',
  standalone: true,
  imports: [TitleComponent, TableOfContentComponent],
  templateUrl: './ts.component.html',
  styleUrl: './ts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsComponent {}
