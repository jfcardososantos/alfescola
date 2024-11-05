import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosAulasComponent } from './horarios-aulas.component';

describe('HorariosAulasComponent', () => {
  let component: HorariosAulasComponent;
  let fixture: ComponentFixture<HorariosAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorariosAulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
