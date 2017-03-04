import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserReview } from "../products";

@Component({
  selector: 'add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFromComponent implements OnInit {
  newReview: UserReview;
  @Output() onAddReview: EventEmitter<UserReview> = new EventEmitter<UserReview>();

  constructor() { }

  ngOnInit() {
  }

  addReview() {
    this.onAddReview.emit(this.newReview);
    this.newReview = undefined;
  }

  startAddingNewReview() {
    this.newReview = new UserReview();
  }

  cancel() {
    this.newReview = undefined;
  }

}
