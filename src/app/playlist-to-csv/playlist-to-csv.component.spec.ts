import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistToCsvComponent } from './playlist-to-csv.component';

describe('PlaylistToCsvComponent', () => {
  let component: PlaylistToCsvComponent;
  let fixture: ComponentFixture<PlaylistToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistToCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
