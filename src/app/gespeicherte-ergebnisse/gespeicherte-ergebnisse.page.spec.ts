import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GespeicherteErgebnissePage } from './gespeicherte-ergebnisse.page';

describe('GespeicherteErgebnissePage', () => {
  let component: GespeicherteErgebnissePage;
  let fixture: ComponentFixture<GespeicherteErgebnissePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GespeicherteErgebnissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
