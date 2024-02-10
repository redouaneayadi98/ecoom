import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductService } from './services/product.service';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    AdminComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ShowProductComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ProductService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
