import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliosDetailsComponent } from './portofolios-details.component';

describe('PortofoliosDetailsComponent', () => {
  let component: PortofoliosDetailsComponent;
  let fixture: ComponentFixture<PortofoliosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofoliosDetailsComponent]
    });
    fixture = TestBed.createComponent(PortofoliosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
