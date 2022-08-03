import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product!: Product;
private baseUri:string="http://localhost:8081";
private headers =new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  
  createProduct(product:Product){
    return this.http.post(this.baseUri+'/create',product,{headers:this.headers});
  }

  readProducts(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateProduct(product:Product){
    return this.http.put(this.baseUri+'/update',product,{headers:this.headers});
  }

  deleteProduct(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
setter(product:Product){
  // product.Startdate=new Date(product.Startdate);
  product.Startdate=this.formatDate(product.Startdate)
  product.Enddate=this.formatDate(product.Enddate)
  // product.Startdate="2022-07-12";
  // product.Enddate=this.formatDate(product.Enddate)
  this.product=product;
  // console.log(product);
  // this.product("save_btn").innerhtml="update";
}
getter(){
  if(this.product){
  return this.product;
  }
  return { Productid:NaN,Productname:"",Productdescription:"",Startdate:"",Enddate:"",_id:undefined } 
}
formatDate(date: any) {      //for formating the date in yyyy/mm/dd format
  let dd: any;
  let mm: any;
  let newDate = new Date(date);
  let yyyy = newDate.getFullYear();

  mm = newDate.getMonth() + 1;
  dd = newDate.getDate();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return "" + yyyy + "-" + mm + "-" + dd;
}
}
