import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public product: Product={Productid:NaN,Productname:"",Productdescription:"",Startdate:"",Enddate:"",_id:undefined};
  constructor(private productService:ProductService,private router:Router) { }
// editMode:boolean=false;
  ngOnInit(): void {
    // this.product={Productid:,Productname:"",Productdescription:"",Startdate:"",Enddate:"",_id:undefined}
    this.product=this.productService.getter();
  }
saveData(){
  if(this.product._id==undefined){
  this.productService.createProduct(this.product).subscribe({
    next:(data)=>{
      console.log(data);
      this.router.navigate(['/table'])
    },
    error:(error)=>{
      console.log(error);
    }
});
  }
  
  else{
    // this.editMode = true;
      this.productService.updateProduct(this.product).subscribe({
        next:(data)=>{
          console.log(data);
          // let newDate=new Date(date)
          // data.msg.forEach(element => {
          //   element.Startdate=new Date(element.Startdate)
          // });
          this.router.navigate(['/table'])
        },
        error:(error)=>{
          console.log(error);
        }
    });
  }
}
}
