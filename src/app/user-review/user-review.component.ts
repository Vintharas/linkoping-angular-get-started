import { Component, OnInit, Input } from '@angular/core';
import { UserReview } from "../products";

@Component({
  selector: 'user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent implements OnInit {
  @Input() review: UserReview;

  constructor() { }

  ngOnInit() {
  }

}
