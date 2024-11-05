import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPdisComponent } from './admin-pdis.component';

describe('AdminPdisComponent', () => {
  let component: AdminPdisComponent;
  let fixture: ComponentFixture<AdminPdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPdisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
