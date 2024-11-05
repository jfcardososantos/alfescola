import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFrequenciaComponent } from './registro-frequencia.component';

describe('RegistroFrequenciaComponent', () => {
  let component: RegistroFrequenciaComponent;
  let fixture: ComponentFixture<RegistroFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroFrequenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
