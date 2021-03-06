import { OsdViewportDirective } from './osd-viewport.directive';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component, ViewContainerRef} from '@angular/core';

@Component({
    template: `<div #osdViewport></div>`
})
class TestOsdComponent {
}


describe('OsdViewportDirective', () => {

    let component: TestOsdComponent;
    let fixture: ComponentFixture<TestOsdComponent>;
    let viewContainerRef: ViewContainerRef;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestOsdComponent, OsdViewportDirective]
        });
        fixture = TestBed.createComponent(TestOsdComponent);
        component = fixture.componentInstance;
        viewContainerRef = fixture.elementRef.nativeElement.viewContainer;
    });

    it('should create an instance', () => {
        const directive = new OsdViewportDirective(viewContainerRef);
        expect(directive).toBeTruthy();
    });
});
