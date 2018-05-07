import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<router-outlet></router-outlet>`,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
