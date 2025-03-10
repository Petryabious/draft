import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public title: string = '';

  public isOpenMenu = false;

  public openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
