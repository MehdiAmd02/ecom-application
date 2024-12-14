import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent }, // Encapsulez dans un objet
  { path: "customers", component: CustomersComponent }, // Encapsulez dans un objet
  { path: "bills/:customerId", component: OrdersComponent }, // Encapsulez dans un objet
  { path: "bill-details/:billId", component: OrderDetailsComponent }, // Encapsulez dans un objet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
