import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBimestresComponent } from './admin-bimestres.component';

describe('AdminBimestresComponent', () => {
  let component: AdminBimestresComponent;
  let fixture: ComponentFixture<AdminBimestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBimestresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBimestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
