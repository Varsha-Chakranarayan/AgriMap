import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMapComponent } from './farmer-map.component';

describe('FarmerMapComponent', () => {
  let component: FarmerMapComponent;
  let fixture: ComponentFixture<FarmerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
