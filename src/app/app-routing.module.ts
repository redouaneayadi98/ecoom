import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes=[
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",canActivate:[AuthenticationGuard],children:[
    {path:"",component:AdminComponent},
    {path:"products",component:ProductsComponent},
    {path:"create",component:CreateProductComponent},
    {path:"update/:id",component:UpdateProductComponent},
    {path:"show/:id",component:ShowProductComponent},
    {path:"contact",component:ContactComponent},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
