import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HilfetextPage } from './hilfetext.page';

describe('HilfetextPage', () => {
  let component: HilfetextPage;
  let fixture: ComponentFixture<HilfetextPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HilfetextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
