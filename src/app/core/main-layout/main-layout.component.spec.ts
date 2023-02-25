import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
    let component: MainLayoutComponent;
    let fixture: ComponentFixture<MainLayoutComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MainLayoutComponent],
            imports: [TranslateModule.forRoot(), RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(MainLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', waitForAsync(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(
            'PAGES.HOME.TITLE'
        );
    }));
});
