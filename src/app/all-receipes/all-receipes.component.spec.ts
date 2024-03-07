import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceipesComponent } from './all-receipes.component';

describe('AllReceipesComponent', () => {
  let component: AllReceipesComponent;
  let fixture: ComponentFixture<AllReceipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllReceipesComponent]
    });
    fixture = TestBed.createComponent(AllReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
