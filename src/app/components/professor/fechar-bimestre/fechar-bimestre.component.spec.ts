import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharBimestreComponent } from './fechar-bimestre.component';

describe('FecharBimestreComponent', () => {
  let component: FecharBimestreComponent;
  let fixture: ComponentFixture<FecharBimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FecharBimestreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecharBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
