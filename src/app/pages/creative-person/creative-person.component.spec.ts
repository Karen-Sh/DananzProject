import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativePersonComponent } from './creative-person.component';

describe('CreativePersonComponent', () => {
  let component: CreativePersonComponent;
  let fixture: ComponentFixture<CreativePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreativePersonComponent]
    });
    fixture = TestBed.createComponent(CreativePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
