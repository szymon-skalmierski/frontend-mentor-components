import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationTargetComponent } from './destination-target.component';

describe('DestinationTargetComponent', () => {
  let component: DestinationTargetComponent;
  let fixture: ComponentFixture<DestinationTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationTargetComponent]
    });
    fixture = TestBed.createComponent(DestinationTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
