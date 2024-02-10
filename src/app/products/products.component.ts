import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]
  errorMessage:string=""
  keyword:string=""
  cat:string=""
  numberOfpage:number=0
  totalPages=0
  size:number=5
  currentIndex=0

  constructor(private productService:ProductService,public authService:AuthenticationService) { }

  ngOnInit(): void {
    this.handleGetProductPage()
  }

  handleDeleteProduct(id:number){
    this.productService.deletProduct(id).subscribe(
      {
        next:(data)=>{
          if(data){
            this.products=this.products.filter((p)=>p.id!=id)
          }},
        error:er=>this.errorMessage=er
      }
    )
  }

  // handleSetPromotion(id:number){
  //   this.productService.setPromotion(id).subscribe(
  //     {
  //       next:(data)=>{
  //         if(data==true){
  //           let product=this.products.find((p)=>p.id===id)
  //           if(product!=undefined){
  //             product.promotion=product.promotion
  //           }}},
  //       error:er=>this.errorMessage=er
  //     }
  //   )
  // }

  handleGetProductPage(pageNumber:number=0){
    this.currentIndex=pageNumber
    this.productService.getProductPage(this.cat,this.keyword,this.size,pageNumber).subscribe(
      {
        next:(data)=>{
          this.products=data.products
          this.totalPages=data.totalPages
        },
        error:er=>this.errorMessage=er
      }
    )
  }

  hendelGetAllProducts(){
    this.keyword=""
    this.cat=""
    this.handleGetProductPage()
  }

  hendelGetAllProductsLegume(){
    this.keyword=""
    this.cat="Légume"
    this.handleGetProductPage()
  }

  hendelGetAllProductsFruit(){
    this.keyword=""
    this.cat="Fruit"
    this.handleGetProductPage()
  }

  hendelGetAllProductsPoisson(){
    this.keyword=""
    this.cat="Poisson"
    this.handleGetProductPage()
  }
}
