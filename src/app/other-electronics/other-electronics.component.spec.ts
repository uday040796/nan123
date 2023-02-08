import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherElectronicsComponent } from './other-electronics.component';

describe('OtherElectronicsComponent', () => {
  let component: OtherElectronicsComponent;
  let fixture: ComponentFixture<OtherElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
