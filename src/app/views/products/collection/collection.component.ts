import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CollectionType} from "../../../types/collection.type";
import {ProductServiceService} from "../../../shared/services/product-service.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit{

  public loading = true;
  public products: CollectionType[] = [];
  constructor(private productService: ProductServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.productService.getProducts()
      .subscribe({
          next: (data) => {
            this.loading = false;
            this.products = data;
            console.log('next')
          },
          error: (error) => {
            this.loading = false;
            this.router.navigate(['/']);
            console.log(error)
          }
        }
      )
  }
}
