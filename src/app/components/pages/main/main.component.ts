import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {


  private observable: Observable<boolean>;
  public modal = false;

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.modal = true)
      }, 10000)
    })
  }

  closeModal() {
    this.modal = false;
  }


  ngOnInit(): void {
    this.observable.subscribe((observer) => {
    })
  }

  ngOnDestroy() {

  }
}
