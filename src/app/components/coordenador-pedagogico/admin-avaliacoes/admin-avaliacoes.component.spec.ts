import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvaliacoesComponent } from './admin-avaliacoes.component';

describe('AdminAvaliacoesComponent', () => {
  let component: AdminAvaliacoesComponent;
  let fixture: ComponentFixture<AdminAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAvaliacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
