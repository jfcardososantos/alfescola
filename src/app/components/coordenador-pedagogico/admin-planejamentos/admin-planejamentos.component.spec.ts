import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanejamentosComponent } from './admin-planejamentos.component';

describe('AdminPlanejamentosComponent', () => {
  let component: AdminPlanejamentosComponent;
  let fixture: ComponentFixture<AdminPlanejamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPlanejamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlanejamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
