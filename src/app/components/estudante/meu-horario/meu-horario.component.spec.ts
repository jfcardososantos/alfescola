import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuHorarioComponent } from './meu-horario.component';

describe('MeuHorarioComponent', () => {
  let component: MeuHorarioComponent;
  let fixture: ComponentFixture<MeuHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
