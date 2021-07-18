import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../../../shared/services/offers/offers.service";
import {NewOffer} from "../../../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dashboard-edit-offer-container',
  templateUrl: './dashboard-edit-offer-container.component.html',
  styleUrls: ['./dashboard-edit-offer-container.component.css']
})
export class DashboardEditOfferContainerComponent implements OnInit {

  offerId = this.route.snapshot.data.offer._id;
  providerId = this.route.snapshot.data.offer.provider._id
  updatedOffer!: NewOffer;
  generalFormData: any;
  detailedFormData = {
    description: this.route.snapshot.data.offer.description,
    tags: this.route.snapshot.data.offer.tags
  }
  imagesData = this.route.snapshot.data.offer.images;


  constructor(private offersService: OffersService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  getGeneralFormData(generalFormData: any) {
    this.generalFormData = generalFormData;

  }

  getDetailedFormData(detailedFormData: any) {
    this.detailedFormData = detailedFormData;
  }

  getImagesData(imagesData: any) {
    this.imagesData = imagesData;

  }

  OnPublish() {
    this.updatedOffer = {
      status: this.generalFormData.status,
      heading: this.generalFormData.heading,
      details: this.generalFormData.details,
      dateInterval: {
        startDate: this.generalFormData.startDate,
        endDate: this.generalFormData.endDate
      },
      availableOffers: this.generalFormData.availableOffers,
      price: this.generalFormData.price,
      images: this.imagesData,
      description: this.detailedFormData?.description,
      tags: this.detailedFormData?.tags,
      provider: this.providerId
    }
    if (confirm('Are you sure to publish this data?')) {
      this.offersService.patchOffer(this.offerId, this.updatedOffer)
        .subscribe(resp => console.log(resp));

    }
  }
}
