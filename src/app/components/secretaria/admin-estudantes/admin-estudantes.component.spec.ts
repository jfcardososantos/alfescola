import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstudantesComponent } from './admin-estudantes.component';

describe('AdminEstudantesComponent', () => {
  let component: AdminEstudantesComponent;
  let fixture: ComponentFixture<AdminEstudantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEstudantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEstudantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
