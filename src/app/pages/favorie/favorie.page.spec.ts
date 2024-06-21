import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriePage } from './favorie.page';

describe('FavoriePage', () => {
  let component: FavoriePage;
  let fixture: ComponentFixture<FavoriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
