import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoefficientsComponent } from './coefficients.component';

describe('CoefficientsComponent', () => {
  let component: CoefficientsComponent;
  let fixture: ComponentFixture<CoefficientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoefficientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefficientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
