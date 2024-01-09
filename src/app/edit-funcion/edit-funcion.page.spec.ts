import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFuncionPage } from './edit-funcion.page';

describe('EditFuncionPage', () => {
  let component: EditFuncionPage;
  let fixture: ComponentFixture<EditFuncionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditFuncionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
