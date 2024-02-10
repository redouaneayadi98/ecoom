import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productFormGroup!:FormGroup
  constructor(private fb:FormBuilder,
              public productService:ProductService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      description:this.fb.control(null,[Validators.required,Validators.minLength(6)]),
      Designation:this.fb.control(null,[Validators.required,Validators.minLength(3)]),
      categoryName:this.fb.control(null,[Validators.required,Validators.minLength(3)]),
      refProduit:this.fb.control(null,[Validators.required,Validators.minLength(4)])
    })
  }

  handleCreateProduct(){
    let product =this.productFormGroup.value
    let id =this.productService.products[this.productService.products.length-1].id+1
    product.id=id

    this.productService.createProduct(product).subscribe(
      {
      next:(product: any)=>{
        this.productFormGroup.reset()
        this.router.navigateByUrl('admin/products')
        alert("Product added successfuly")
      },
      error:(er: any)=>{console.log(er)}
      }
    )
  }
}
