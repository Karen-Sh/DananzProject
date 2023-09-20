import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliosComponent } from './portofolios.component';

describe('PortofoliosComponent', () => {
  let component: PortofoliosComponent;
  let fixture: ComponentFixture<PortofoliosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofoliosComponent]
    });
    fixture = TestBed.createComponent(PortofoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
