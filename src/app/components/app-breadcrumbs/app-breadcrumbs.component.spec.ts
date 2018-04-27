import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBreadcrumbsComponent } from './app-breadcrumbs.component';

describe('AppBreadcrumbsComponent', () => {
  let component: AppBreadcrumbsComponent;
  let fixture: ComponentFixture<AppBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
