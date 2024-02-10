import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productFormGroup!:FormGroup
  id:any
  constructor(private fb:FormBuilder,
              public productService:ProductService,
              private router:Router,
              private route:ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.id=param.get('id')
    })
    let product=this.productService.products.find(p=>p.id==this.id)
    this.productFormGroup=this.fb.group({
      name:this.fb.control(product?.name,[Validators.required,Validators.minLength(3)]),
      description:this.fb.control(product?.description,[Validators.required,Validators.minLength(6)]),
      Designation:this.fb.control(product?.Designation,[Validators.required,Validators.minLength(3)]),
      categoryName:this.fb.control(product?.categoryName,[Validators.required,Validators.minLength(3)]),
      refProduit:this.fb.control(product?.refProduit,[Validators.required,Validators.minLength(4)]),
      // price:this.fb.control(product?.price,[Validators.required,Validators.min(200)]),
      // promotion:this.fb.control(product?.promotion,[Validators.required])
    })
  }

  handleUpdateProduct(){
    let product =this.productFormGroup.value
    product.id=this.id

    this.productService.updateProduct(product).subscribe(
      {
      next:(product: any)=>{
        this.productFormGroup.reset()
        this.router.navigateByUrl('admin/products')
        alert("Product updated successfuly")
      },
      error:(er: any)=>{console.log(er)}
      }
    )
  }
}
