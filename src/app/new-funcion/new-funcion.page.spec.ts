import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewFuncionPage } from './new-funcion.page';

describe('NewFuncionPage', () => {
  let component: NewFuncionPage;
  let fixture: ComponentFixture<NewFuncionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewFuncionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
