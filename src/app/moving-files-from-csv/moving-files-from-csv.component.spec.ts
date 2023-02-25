import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingFilesFromCsvComponent } from './moving-files-from-csv.component';

describe('MovingFilesFromCsvComponent', () => {
  let component: MovingFilesFromCsvComponent;
  let fixture: ComponentFixture<MovingFilesFromCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingFilesFromCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingFilesFromCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
