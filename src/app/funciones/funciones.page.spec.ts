import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionesPage } from './funciones.page';

describe('FuncionesPage', () => {
  let component: FuncionesPage;
  let fixture: ComponentFixture<FuncionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuncionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
