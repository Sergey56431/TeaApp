import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ProductServiceService} from "../../../services/product-service.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private productName = this.activatedRoute.snapshot.queryParamMap.get('product')

  inputFormControl = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('^[А-Я][а-я]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[А-Я][а-я]+$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]),
    zip: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9]+$')]),
    country: new FormControl('', [Validators.required]),
    product: new FormControl({value: this.productName, disabled: true}, [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я0-9\\-\\/\\s]+$')]),
    comment: new FormControl('')
  })

  form: boolean = true;
  successOrder: boolean = false;
  notSuccessful:boolean = false;

  private subcription: Subscription | null = null;

  constructor(private fb: FormBuilder, private productService: ProductServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  get inputName() {
    return this.inputFormControl.get('name');
  }
  get inputLastName() {
    return this.inputFormControl.get('lastName');
  }
  get inputAddress() {
    return this.inputFormControl.get('address');
  }
  get inputZip() {
    return this.inputFormControl.get('zip');
  }
  get inputCountry() {
    return this.inputFormControl.get('country');
  }
  get inputPhone() {
    return this.inputFormControl.get('phone');
  }

  createOrder() {
    
    this.productService.createOrder({
      name: this.inputFormControl.value.name,
      last_name: this.inputFormControl.value.lastName,
      phone: this.inputFormControl.value.phone,
      country: this.inputFormControl.value.country,
      zip: this.inputFormControl.value.zip,
      product: this.productName,
      address: this.inputFormControl.value.address,
      comment: this.inputFormControl.value.comment,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.form = false;
          this.successOrder = true;
          this.notSuccessful = false;
          console.log(response)
        } else {
          this.notSuccessful = true;
          console.log(response)
          console.log(this.productName)
        }
      })
  }

  ngOnDestroy() {
    this.subcription?.unsubscribe();
  }

}
