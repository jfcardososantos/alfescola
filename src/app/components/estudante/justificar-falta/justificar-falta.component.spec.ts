import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificarFaltaComponent } from './justificar-falta.component';

describe('JustificarFaltaComponent', () => {
  let component: JustificarFaltaComponent;
  let fixture: ComponentFixture<JustificarFaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustificarFaltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificarFaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
