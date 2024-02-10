export interface Product{
  id:number
  name:string
  description: string
  Designation:string
  categoryName:string
  refProduit:string
  photoProduit:string

}

export interface ProductPage{
  products:Product[]
  totalPages:number
}

