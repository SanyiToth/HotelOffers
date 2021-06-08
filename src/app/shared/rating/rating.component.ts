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

  avgRating(reviews: any[]): string {
    let sum: number = 0;
    reviews.forEach((item) => {
      sum = sum + item.rating;
    });
    return (sum / reviews.length).toFixed(1);
  }


  ngOnInit(): void {
    this.reviewsService.getReviews(1)
      .subscribe(reviews => {
        this.reviews = reviews;
        this.avgRating(reviews)
        console.log(this.avgRating(reviews));
      })
  }

}
