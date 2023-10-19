import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySolutionComponent } from './technology-solution.component';

describe('TechnologySolutionComponent', () => {
  let component: TechnologySolutionComponent;
  let fixture: ComponentFixture<TechnologySolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologySolutionComponent]
    });
    fixture = TestBed.createComponent(TechnologySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
