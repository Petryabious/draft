import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() isSideMenuActive = false;
  @Output() isSideMenuActiveChange = new EventEmitter<boolean>();

  public changeStateSideMenu(): void {
    this.isSideMenuActiveChange.emit(!this.isSideMenuActive);
  }
}
