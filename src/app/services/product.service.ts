import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { Product, ProductPage } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    { id: 11, name: "Courgette", description: "Un légume vert et tendre souvent utilisé en cuisine", Designation: "Légume", categoryName: "Légume", refProduit: "COUR001", photoProduit: "courgette.jpg" },
    { id: 12, name: "Aubergine", description: "Un légume violet utilisé dans de nombreuses recettes méditerranéennes", Designation: "Légume", categoryName: "Légume", refProduit: "AUB001", photoProduit: "aubergine.jpg" },
    { id: 13, name: "Chou-fleur", description: "Un légume crucifère blanc utilisé cru ou cuit", Designation: "Légume", categoryName: "Légume", refProduit: "CHF001", photoProduit: "chou-fleur.jpg" },
    { id: 14, name: "Poivron", description: "Un légume coloré souvent utilisé en cuisine pour sa saveur douce", Designation: "Légume", categoryName: "Légume", refProduit: "POIV001", photoProduit: "poivron.jpg" },
    { id: 15, name: "Oignon", description: "Un légume bulbeux utilisé pour ajouter de la saveur à de nombreux plats", Designation: "Légume", categoryName: "Légume", refProduit: "ONI001", photoProduit: "oignon.jpg" },
    { id: 16, name: "Courge", description: "Un légume d'automne à la chair sucrée et orange", Designation: "Légume", categoryName: "Légume", refProduit: "COU001", photoProduit: "courge.jpg" },
    { id: 17, name: "Haricot vert", description: "Un légume vert long et mince souvent servi cuit à la vapeur ou sauté", Designation: "Légume", categoryName: "Légume", refProduit: "HAR001", photoProduit: "haricot-vert.jpg" },
    { id: 18, name: "Radis", description: "Un légume racine croquant et piquant", Designation: "Légume", categoryName: "Légume", refProduit: "RAD001", photoProduit: "radis.jpg" },
    { id: 19, name: "Patate douce", description: "Une variété de pomme de terre à la chair douce et orangée", Designation: "Légume", categoryName: "Légume", refProduit: "PAT001", photoProduit: "patate-douce.jpg" },
    { id: 20, name: "Brocoli", description: "Un légume vert nutritif souvent servi cuit à la vapeur ou sauté", Designation: "Légume", categoryName: "Légume", refProduit: "BRO001", photoProduit: "brocoli.jpg" },
    
    { id: 21, name: "Fraise", description: "Un petit fruit rouge sucré souvent utilisé dans les desserts", Designation: "Fruit", categoryName: "Fruit", refProduit: "FRA001", photoProduit: "fraise.jpg" },
    { id: 22, name: "Ananas", description: "Un fruit tropical sucré et juteux avec une chair jaune", Designation: "Fruit", categoryName: "Fruit", refProduit: "ANA001", photoProduit: "ananas.jpg" },
    { id: 23, name: "Raisin", description: "Un fruit sucré et juteux souvent consommé frais ou séché", Designation: "Fruit", categoryName: "Fruit", refProduit: "RAI001", photoProduit: "raisin.jpg" },
    { id: 24, name: "Myrtille", description: "Un petit fruit bleu foncé souvent utilisé dans les desserts et les smoothies", Designation: "Fruit", categoryName: "Fruit", refProduit: "MYR001", photoProduit: "myrtille.jpg" },
    { id: 25, name: "Mangue", description: "Un fruit tropical sucré et juteux avec une chair orange", Designation: "Fruit", categoryName: "Fruit", refProduit: "MAN001", photoProduit: "mangue.jpg" },
    { id: 26, name: "Cerise", description: "Un petit fruit rouge ou noir sucré souvent consommé frais", Designation: "Fruit", categoryName: "Fruit", refProduit: "CER001", photoProduit: "cerise.jpg" },
    { id: 27, name: "Pêche", description: "Un fruit juteux avec une chair douce souvent consommé frais ou en conserve", Designation: "Fruit", categoryName: "Fruit", refProduit: "PECH001", photoProduit: "peche.jpg" },
    { id: 28, name: "Kiwi", description: "Un fruit ovale et brun avec une chair verte et des graines noires", Designation: "Fruit", categoryName: "Fruit", refProduit: "KIW001", photoProduit: "kiwi.jpg" },
    { id: 29, name: "Pastèque", description: "Un fruit gros et juteux avec une chair rouge ou jaune et une peau verte rayée", Designation: "Fruit", categoryName: "Fruit", refProduit: "PAS001", photoProduit: "pasteque.jpg" },
    { id: 30, name: "Pomelo", description: "Un agrume doux avec une chair rose ou jaune souvent consommé frais", Designation: "Fruit", categoryName: "Fruit", refProduit: "POM002", photoProduit: "pomelo.jpg" },

    { id: 61, name: "Bar", description: "Poisson mariné délicieux et riche en saveur souvent grillé ou cuit au four", Designation: "Poisson", categoryName: "Poisson", refProduit: "BAR001", photoProduit: "bar.jpg" },
    { id: 62, name: "Truite", description: "Poisson d'eau douce délicat souvent grillé ou cuit au four", Designation: "Poisson", categoryName: "Poisson", refProduit: "TRU001", photoProduit: "truite.jpg" },
    { id: 63, name: "Anguille", description: "Poisson d'eau douce ou marin souvent fumé et utilisé dans la cuisine asiatique", Designation: "Poisson", categoryName: "Poisson", refProduit: "ANG001", photoProduit: "anguille.jpg" },
    { id: 64, name: "Maquereau", description: "Poisson gras savoureux souvent grillé, cuit au four ou mariné", Designation: "Poisson", categoryName: "Poisson", refProduit: "MAQ001", photoProduit: "maquereau.jpg" },
    { id: 65, name: "Dorade", description: "Poisson mariné tendre et savoureux souvent cuit au four ou grillé entier", Designation: "Poisson", categoryName: "Poisson", refProduit: "DOR001", photoProduit: "dorade.jpg" },
    { id: 66, name: "Carpe", description: "Poisson d'eau douce souvent cuit entier et servi avec une sauce", Designation: "Poisson", categoryName: "Poisson", refProduit: "CAR001", photoProduit: "carpe.jpg" },
    { id: 67, name: "Saumon fumé", description: "Poisson rose mariné et fumé souvent utilisé comme hors-d'œuvre ou sur des bagels", Designation: "Poisson", categoryName: "Poisson", refProduit: "SAF001", photoProduit: "saumon-fume.jpg" },
    { id: 68, name: "Sardine", description: "Poisson petit et gras souvent servi grillé ou en conserve dans de l'huile", Designation: "Poisson", categoryName: "Poisson", refProduit: "SAR001", photoProduit: "sardine.jpg" },
    { id: 69, name: "Turbot", description: "Poisson plat délicat souvent cuit entier et servi avec une sauce", Designation: "Poisson", categoryName: "Poisson", refProduit: "TUR001", photoProduit: "turbot.jpg" },
    { id: 70, name: "Thon rouge", description: "Poisson mariné de luxe souvent utilisé dans les sushis et les sashimis", Designation: "Poisson", categoryName: "Poisson", refProduit: "THR001", photoProduit: "thon-rouge.jpg" },

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
