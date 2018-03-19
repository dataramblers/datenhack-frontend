import { OsdViewportDirective } from './osd-viewport.directive';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import { Component, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
    template: `<div appOsdViewport></div>`
})
class TestOsdComponent {
}


describe('OsdViewportDirective', () => {

    let component: TestOsdComponent;
    let fixture: ComponentFixture<TestOsdComponent>;
    let el: ElementRef;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestOsdComponent, OsdViewportDirective]
        });
        fixture = TestBed.createComponent(TestOsdComponent);
        component = fixture.componentInstance;
        el = fixture.elementRef.nativeElement.viewContainer;
    });

    it('should create an instance', () => {
        const directive = new OsdViewportDirective(el, undefined);
        expect(directive).toBeTruthy();
    });
});
