import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodButtonComponent } from './good-button.component';

describe('GoodButtonComponent', () => {
  let component: GoodButtonComponent;
  let fixture: ComponentFixture<GoodButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
