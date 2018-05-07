import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesListComponent } from './images-list.component';
import {MaterialModule} from '../../material.module';
import {By} from '@angular/platform-browser';

describe('ImagesListComponent', () => {
    let component: ImagesListComponent;
    let fixture: ComponentFixture<ImagesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ImagesListComponent ],
            imports: [MaterialModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImagesListComponent);
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
