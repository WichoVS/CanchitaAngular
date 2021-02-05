import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNoticiasComponent } from './mostrar-noticias.component';

describe('MostrarNoticiasComponent', () => {
  let component: MostrarNoticiasComponent;
  let fixture: ComponentFixture<MostrarNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
