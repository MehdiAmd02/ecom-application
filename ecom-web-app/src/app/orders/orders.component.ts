import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {


bills: any;
customerId!:number

  constructor(private http: HttpClient , private router: Router , private route:ActivatedRoute) {
    this.customerId = route.snapshot.params['customerId'];
  }
 ngOnInit(): void {
   this.http.get('http://localhost:8888/BILING-SERVICE/bills/search/byCustomerId?projection=fullBills&customerId='+this.customerId).subscribe({
     next : (data) => {
       this.bills=data;
     },
     error : (error) => {}
   });
 }
 getOrderDetails(b: any) {
  this.router.navigateByUrl("/bill-details/"+this.customerId);
  }

}


