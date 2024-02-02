import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CollectionType} from "../types/collection.type";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product: string = '';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<CollectionType[]>{
    return this.http.get<CollectionType[]>('https://testologia.site/tea')
  }

  getProduct(id: number): Observable<CollectionType>{
    return this.http.get<CollectionType>(`https://testologia.site/tea?id=${id}`)
  }

  createOrder(data:
                {
                  name: string | null | undefined,
                  last_name:  string | null | undefined,
                  phone:  string | null | undefined,
                  country:  string | null | undefined,
                  zip:  string | null | undefined,
                  product:  string | null | undefined,
                  address:  string | null | undefined,
                  comment?:  string | null | undefined,
                }) {
    return this.http.post<{ success: boolean, message: string }>('https://testologia.site/order-tea', data);
  }
}
