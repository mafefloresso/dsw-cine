import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMoviePage } from './new-movie.page';

describe('NewMoviePage', () => {
  let component: NewMoviePage;
  let fixture: ComponentFixture<NewMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
