import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { GoldCoinsPipe } from './gold-coins.pipe';

import { ProductsService } from './products.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { MyCommonModule } from './common/my-common.module';
import { UserReviewComponent } from './user-review/user-review.component';
import { AddReviewFromComponent } from './add-review-form/add-review-form.component';

const routes: Routes = [
   {
    path: 'products',
    component: ProductsComponent,
   },
   {
    path: 'products/:id',
    component: ProductDetailsComponent
   },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    GoldCoinsPipe,
    ProductComponent,
    ProductDetailsComponent,
    UserReviewComponent,
    AddReviewFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MyCommonModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
