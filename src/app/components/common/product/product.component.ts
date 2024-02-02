import {Component, Input} from '@angular/core';
import {CollectionType} from "../../../types/collection.type";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: CollectionType;

  constructor() {

    this.product = {
      id: 0,
      image: '',
      price: 0,
      title: '',
      description: '',
    }
  }
}
