import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAjoutComponent } from './notes-ajout.component';

describe('NotesAjoutComponent', () => {
  let component: NotesAjoutComponent;
  let fixture: ComponentFixture<NotesAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
