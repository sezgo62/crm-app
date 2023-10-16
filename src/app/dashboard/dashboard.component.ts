import { Component } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

constructor(public serviceFirebase: FirebaseserviceService, public router: Router) {

}

  email: any;
  password: any;


registerUser() {
  debugger;
console.log(this.email);
console.log(this.password);

const auth = this.serviceFirebase.auth;
console.log(auth);

createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

loginUser() {

const auth = this.serviceFirebase.auth;
debugger;
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
console.log('You are logged in', userCredential);
this.router.navigate(['/user']);
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

}
