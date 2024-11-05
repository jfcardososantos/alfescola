import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPlanejamentoComponent } from './novo-planejamento.component';

describe('NovoPlanejamentoComponent', () => {
  let component: NovoPlanejamentoComponent;
  let fixture: ComponentFixture<NovoPlanejamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoPlanejamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
