import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoordenadoresComponent } from './admin-coordenadores.component';

describe('AdminCoordenadoresComponent', () => {
  let component: AdminCoordenadoresComponent;
  let fixture: ComponentFixture<AdminCoordenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCoordenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCoordenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
