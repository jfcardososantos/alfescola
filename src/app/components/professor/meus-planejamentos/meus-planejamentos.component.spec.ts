import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPlanejamentosComponent } from './meus-planejamentos.component';

describe('MeusPlanejamentosComponent', () => {
  let component: MeusPlanejamentosComponent;
  let fixture: ComponentFixture<MeusPlanejamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeusPlanejamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusPlanejamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
