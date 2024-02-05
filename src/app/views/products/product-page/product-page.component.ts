import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionType} from "../../../types/collection.type";
import {ProductServiceService} from "../../../shared/services/product-service.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  @Input() product: CollectionType;

  constructor(private activatedRouter: ActivatedRoute, private productService: ProductServiceService,
              private router: Router) {
    this.product = {
      id: 0,
      image: '',
      price: 0,
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      if (params['id']) {

        this.productService.getProduct(+params['id'])
          .subscribe( {
            next: (data) => {
              this.product = data
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          })
      } else {
        this.router.navigate(['/'])
      }
    })
  }
}

