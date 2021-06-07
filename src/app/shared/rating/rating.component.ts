import {Component, OnInit} from '@angular/core';
import {ReviewsService} from "../services/reviews/reviews.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  reviews: any[] = []

  constructor(private reviewsService: ReviewsService) {
  }

  ngOnInit(): void {
    this.reviewsService.getReviews(1)
      .subscribe(reviews => {
        console.log('reviews', reviews)
        this.reviews = reviews;
      })
  }

}
