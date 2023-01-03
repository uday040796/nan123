import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitrsictsComponent } from './ditrsicts.component';

describe('DitrsictsComponent', () => {
  let component: DitrsictsComponent;
  let fixture: ComponentFixture<DitrsictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitrsictsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DitrsictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
