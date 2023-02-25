import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTagEditorComponent } from './music-tag-editor.component';

describe('MusicTagEditorComponent', () => {
  let component: MusicTagEditorComponent;
  let fixture: ComponentFixture<MusicTagEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicTagEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicTagEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
