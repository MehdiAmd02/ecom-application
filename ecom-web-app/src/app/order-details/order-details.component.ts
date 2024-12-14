import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: false,
  
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

billDetails: any;
billId!:number

  constructor(private http: HttpClient , private router: Router , private route:ActivatedRoute) {
    this.billId = route.snapshot.params['billId'];
  }
 ngOnInit(): void {
   this.http.get('http://localhost:8888/BILING-SERVICE/bills/'+this.billId).subscribe({
     next : (data) => {
       this.billDetails=data;
     },
     error : (error) => {}
   });
 }

}