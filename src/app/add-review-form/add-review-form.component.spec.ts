import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewFromComponent } from './add-review-from.component';

describe('AddReviewFromComponent', () => {
  let component: AddReviewFromComponent;
  let fixture: ComponentFixture<AddReviewFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
