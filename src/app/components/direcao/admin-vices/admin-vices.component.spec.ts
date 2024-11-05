import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVicesComponent } from './admin-vices.component';

describe('AdminVicesComponent', () => {
  let component: AdminVicesComponent;
  let fixture: ComponentFixture<AdminVicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
