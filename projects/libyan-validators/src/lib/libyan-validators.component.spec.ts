import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibyanValidatorsComponent } from './libyan-validators.component';

describe('LibyanValidatorsComponent', () => {
  let component: LibyanValidatorsComponent;
  let fixture: ComponentFixture<LibyanValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibyanValidatorsComponent]
    });
    fixture = TestBed.createComponent(LibyanValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
