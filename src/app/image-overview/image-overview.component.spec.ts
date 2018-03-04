import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOverviewComponent } from './image-overview.component';
import {MaterialModule} from '../material.module';
import {By} from '@angular/platform-browser';

describe('ImageOverviewComponent', () => {
  let component: ImageOverviewComponent;
  let fixture: ComponentFixture<ImageOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageOverviewComponent ],
        imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOverviewComponent);
    component = fixture.componentInstance;
    component.imageNames = Array(10).fill('test');
    component.columns = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should create 10 preview images', () => {
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('mat-grid-tile')).length === 10)
          .toBe(true);
  });
});
