import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuBoletimComponent } from './meu-boletim.component';

describe('MeuBoletimComponent', () => {
  let component: MeuBoletimComponent;
  let fixture: ComponentFixture<MeuBoletimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuBoletimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuBoletimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
