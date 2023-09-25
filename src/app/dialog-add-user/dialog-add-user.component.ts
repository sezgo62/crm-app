import { Component, inject } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, collectionData, doc } from '@angular/fire/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {  setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { FirebaseserviceService } from '../firebaseservice.service';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  constructor(public serviceFirebase: FirebaseserviceService) {
   
  }

  user = new User();
  birthDate: any;
  progressBar = false;
  

  onNoClick() {
    //this.dialogRef.close();
  }

  async saveUser() {
    this.progressBar = true;

    debugger;
    if (isNaN(this.user.birthDate)) {
      this.user.birthDate = this.birthDate.getTime();
    }

  
let collId = 'users';
    //let objToJson = this.user.toJson();

//this.serviceFirebase.addUser(collId, this.user);
    
  }
}
