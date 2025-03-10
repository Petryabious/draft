import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [TitleComponent, RouterLink, RouterOutlet],
  templateUrl: './js.component.html',
  styleUrl: './js.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsComponent {}
