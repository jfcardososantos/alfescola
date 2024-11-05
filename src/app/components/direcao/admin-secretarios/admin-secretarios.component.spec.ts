import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecretariosComponent } from './admin-secretarios.component';

describe('AdminSecretariosComponent', () => {
  let component: AdminSecretariosComponent;
  let fixture: ComponentFixture<AdminSecretariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSecretariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSecretariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
