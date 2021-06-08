import {Component, OnInit} from '@angular/core';
import {ReviewsService} from "../services/reviews/reviews.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  reviews: any[] = []
  rating: string = '';
  numberOfRatings: number = 0;

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
        this.rating = this.avgRating(reviews)
        this.numberOfRatings = reviews.length;
        console.log(this.avgRating(reviews));
      })
  }

}
