import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public products!: Product[];
  constructor(private _productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.readProducts();
  }
readProducts(){
  this._productService.readProducts().subscribe({
    next:(data:any)=>{
      console.log(data);
      this.products=data['msg'];
    },
    error:(error)=>{
      console.log(error);
    }
  });
}
edited(product: any){

  this._productService.setter(product);
  this.router.navigate(['/task']);
}
deleted(product: any){
  if(confirm("Are you sure you want to delete?"))
  this._productService.deleteProduct(product._id).subscribe({
    next:(data)=>{
      this.products.splice(this.products.indexOf(product),1);
    },
    error:(error)=>{

    }
});
}
}
