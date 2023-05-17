import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothInlineComponent } from './both-inline.component';

describe('BothInlineComponent', () => {
  let component: BothInlineComponent;
  let fixture: ComponentFixture<BothInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BothInlineComponent]
    });
    fixture = TestBed.createComponent(BothInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
