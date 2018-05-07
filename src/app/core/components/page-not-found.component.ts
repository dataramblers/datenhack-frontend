import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <p>404</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
}
