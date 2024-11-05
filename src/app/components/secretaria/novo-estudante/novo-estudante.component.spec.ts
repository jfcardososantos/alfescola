import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEstudanteComponent } from './novo-estudante.component';

describe('NovoEstudanteComponent', () => {
  let component: NovoEstudanteComponent;
  let fixture: ComponentFixture<NovoEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoEstudanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
