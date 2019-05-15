import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierinfosComponent } from './modifierinfos.component';

describe('ModifierinfosComponent', () => {
  let component: ModifierinfosComponent;
  let fixture: ComponentFixture<ModifierinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
