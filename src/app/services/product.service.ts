import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { Product, ProductPage } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
      { id: 1, name: "Carotte", description: "Une racine comestible orange", Designation: "Légume", categoryName: "Légume", refProduit: "CAR001", photoProduit: "carotte.jpg" },
      { id: 2, name: "Pomme", description: "Un fruit croquant et juteux", Designation: "Fruit", categoryName: "Fruit", refProduit: "POM001", photoProduit: "pomme.jpg" },
      { id: 3, name: "Persil", description: "Une herbe aromatique utilisée en cuisine", Designation: "Herbe", categoryName: "Herbe", refProduit: "PER001", photoProduit: "persil.jpg" },
      { id: 4, name: "Poulet", description: "Viande de volaille tendre et savoureuse", Designation: "Viande", categoryName: "Viande", refProduit: "POU001", photoProduit: "poulet.jpg" },
      { id: 5, name: "Œufs", description: "Œufs de poule frais et riches en protéines", Designation: "Œuf", categoryName: "Œuf", refProduit: "OEU001", photoProduit: "oeufs.jpg" },
      { id: 6, name: "Saumon", description: "Poisson rose délicieux et riche en oméga-3", Designation: "Poisson", categoryName: "Poisson", refProduit: "SAU001", photoProduit: "saumon.jpg" },
      { id: 7, name: "Tomate", description: "Un fruit rouge utilisé comme légume dans la cuisine", Designation: "Légume", categoryName: "Légume", refProduit: "TOM001", photoProduit: "tomate.jpg" },
      { id: 8, name: "Banane", description: "Un fruit jaune doux et énergétique", Designation: "Fruit", categoryName: "Fruit", refProduit: "BAN001", photoProduit: "banane.jpg" },
      { id: 9, name: "Thon", description: "Poisson mariné délicieux et sain", Designation: "Poisson", categoryName: "Poisson", refProduit: "THO001", photoProduit: "thon.jpg" },
      { id: 10, name: "Céleri", description: "Un légume croquant et rafraîchissant", Designation: "Légume", categoryName: "Légume", refProduit: "CEL001", photoProduit: "celeri.jpg" }
  ]

  constructor() {
  }

  getAllProduct():Observable<Product[]>{
    return of(this.products)
  }

  deletProduct(id:number):Observable<boolean>{
    this.products=this.products.filter((p)=>p.id!=id)
    return of(true)
  }

  setPromotion(id:number):Observable<boolean>{
    let product=this.products.find((p)=>p.id===id)

    if(product!=undefined){
      product.id=product.id
      return of(true)
    }
    else return throwError(()=>new Error("internet failed"))
  }

  // productSearched(keyword:string,size:number):Observable<ProductPage>{
  //   let products=this.products.filter((p)=>p.name.includes(keyword))

  //   let totalPages=~~(products.length/size)
  //   if(this.products.length % size!=0){
  //     totalPages++
  //   }
  //   // let product=this.products.slice(size*numberOfPage,size*numberOfPage+size)
  //   return of({products:products,totalPages:totalPages})

  // }

  getProductPage(cat:string,keyword:string,size:number,numberOfPage:number):Observable<ProductPage>{
    if(cat==""){
      if(keyword==""){
      let totalPages=~~(this.products.length/size)
        if(this.products.length % size!=0){
          totalPages++
        }
        let products=this.products.slice(size*numberOfPage,size*numberOfPage+size)
        return of({products:products,totalPages:totalPages})
      }
      else{
      let products=this.products.filter((p)=>p.name.includes(keyword))
      let totalPages=~~(products.length/size)
        if(products.length % size!=0){
        totalPages++
        }
          let product=products.slice(size*numberOfPage,size*numberOfPage+size)
          return of({products:product,totalPages:totalPages})
      }
    }else{
      let products=this.products.filter((p)=>p.categoryName==cat)
      let totalPages=~~(products.length/size)
        if(products.length % size!=0){
        totalPages++
        }
          let product=products.slice(size*numberOfPage,size*numberOfPage+size)
          return of({products:product,totalPages:totalPages})
    }
  }

  createProduct(product:any):Observable<Product>{
    this.products.push(product)
    return of(product)
  }

  getProductById(productId:number):Observable<Product|undefined>{
    return of(this.products.find((p)=>p.id===Number(productId)))
  }

  updateProduct(productt:any):Observable<boolean>{
    let product=this.products.find((p)=>p.id===Number(productt.id))
    if(product!=undefined){
      product.name=productt.name
      product.description=productt.description
      product.Designation=productt.Designation
      product.refProduit=productt.refProduit
      return of(true)
    }
    else return throwError(()=>new Error("internet failed"))
  }

  errorProduct(name:string,error:ValidationErrors):any{

    if(error['required'])
      return name +" is Required"

    else if(error['minlength'])
      return name+" should have at last "+error['minlength']["requiredLength"]+" Charaters"

    else if(error['min'])
      return name+" should have min value "+error['min']["min"]

    else
      return undefined
  }
}
