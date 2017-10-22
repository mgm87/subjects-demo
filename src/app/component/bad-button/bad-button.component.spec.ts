import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadButtonComponent } from './bad-button.component';

describe('BadButtonComponent', () => {
  let component: BadButtonComponent;
  let fixture: ComponentFixture<BadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
