import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
  }
newProduct(event:any){
event.preventDefault();
this.productService.setter(new Product());
this.router.navigate(['/task'])
}
}
