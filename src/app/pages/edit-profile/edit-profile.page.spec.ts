import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProfilPage } from './edit-profile.page';

describe('EditProfilPage', () => {
  let component: EditProfilPage;
  let fixture: ComponentFixture<EditProfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
