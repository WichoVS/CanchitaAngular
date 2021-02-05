import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNoticias2Component } from './mostrar-noticias2.component';

describe('MostrarNoticias2Component', () => {
  let component: MostrarNoticias2Component;
  let fixture: ComponentFixture<MostrarNoticias2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNoticias2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNoticias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
