import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  productFormGroup!:FormGroup
  product!:Product|undefined
  id:any
  path!:string

  constructor(private productService:ProductService,
              private route:ActivatedRoute) {
                this.route.paramMap.subscribe((param:ParamMap)=>{
                  this.id=param.get('id')
                })
  }

  ngOnInit(): void {
    this.handleGetProductById()
  }

  handleGetProductById(){
    this.productService.getProductById(Number(this.id)).subscribe(
      {
      next:(product)=>{
        this.product=product
      },
      error:(er: any)=>{console.log(er)}
      }
    )
  }

}
