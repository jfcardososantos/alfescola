import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPdiComponent } from './registro-pdi.component';

describe('RegistroPdiComponent', () => {
  let component: RegistroPdiComponent;
  let fixture: ComponentFixture<RegistroPdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPdiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
