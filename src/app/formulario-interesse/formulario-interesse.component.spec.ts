import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInteresseComponent } from './formulario-interesse.component';

describe('FormularioInteresseComponent', () => {
  let component: FormularioInteresseComponent;
  let fixture: ComponentFixture<FormularioInteresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioInteresseComponent]
    });
    fixture = TestBed.createComponent(FormularioInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
