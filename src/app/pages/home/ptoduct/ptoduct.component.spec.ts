import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoductComponent } from './ptoduct.component';

describe('PtoductComponent', () => {
  let component: PtoductComponent;
  let fixture: ComponentFixture<PtoductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtoductComponent]
    });
    fixture = TestBed.createComponent(PtoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
