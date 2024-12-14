import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: false,
  
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers: any;

  constructor(private http: HttpClient , private router: Router) {

  }
 ngOnInit(): void {
   this.http.get('http://localhost:8888/CUSTOMER-SERVICE/api/customers').subscribe({
     next : (data) => {
       this.customers=data;
     },
     error : (error) => {}
   });
 }


 getOrders(c: any) {
    this.router.navigateByUrl("/bills/" + c.id);
  }
}


