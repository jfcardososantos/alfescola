import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlbunsComponent } from './admin-albuns.component';

describe('AdminAlbunsComponent', () => {
  let component: AdminAlbunsComponent;
  let fixture: ComponentFixture<AdminAlbunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAlbunsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
