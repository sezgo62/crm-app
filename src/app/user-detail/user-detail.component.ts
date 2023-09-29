import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

userId;

constructor(private route:ActivatedRoute, public serviceFireSore: FirebaseserviceService) {
  this.userId = this.route.snapshot.paramMap.get('id');
console.log(this.userId);
debugger;
this.getUser(this.userId);
}
ourValue: any;

getUser(userId: any) {
 this.ourValue
 = this.serviceFireSore.getAnUser('users', userId);
debugger;
console.log(this.ourValue);

}

}
