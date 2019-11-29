import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../models/product.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

    private productUrl = 'http://springbootproductproject-env.mryebzsfd9.us-east-2.elasticbeanstalk.com';
	//private productUrl = '/api';

  public getProducts() {
    return this.http.get<Product[]>(this.productUrl + "/products");
  }

  public deleteProduct(product) {
    return this.http.delete(this.productUrl + "/delete/"+ product.id);
  }

  public createProduct(product) {
    return this.http.post<Product>(this.productUrl + "/addProduct", product);
  }
}
