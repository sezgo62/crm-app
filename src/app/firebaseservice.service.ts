import { getDoc, getDocs, query } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, onSnapshot, addDoc, DocumentReference, updateDoc, deleteDoc, where, limit } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { getAuth } from "firebase/auth";
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  auth;

  constructor() {
    this.unsubUsers = this.subUsersList();
    const app = initializeApp(environment.firebase);
    this.auth = getAuth(app);
    console.log(this.auth);
    
  }

  firestore: Firestore = inject(Firestore);


  allUsers: User[] = [];
  unsubUsers;

  subUsersList() {
    const q = query(this.getRefUsers());
    return onSnapshot(q, (list) => { //Die onSnapshot-Methode aus dem Firebase Firestore SDK ist dazu da, um Änderungen in einer Firestore-Sammlung zu überwachen und eine Funktion auszuführen, wenn Änderungen auftreten.

      this.allUsers = [];

      list.forEach(element => {
        //console.log('Our Users', element.data());
        //const userData = element.data() as User;
        console.log('element.data() is', element.data());

        let colRef = this.getSingleDocRef(this.getColIdFromUsers(), element.id);
        updateDoc(colRef, {
          id: element.id
        });

        this.allUsers.push(this.setNodeObject(element.data(), element.id));



        console.log('Here are all users', this.allUsers);
      });
    });
  }

  getColIdFromUsers() {
    return 'users'
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);

  }


  async getAnUser(colId: any, userId: any) {

    const docRef = doc(this.firestore, colId, userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();

    /*const docRef = doc(this.firestore, colId, userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();*/
  }


  setNodeObject(obj: any, id: string): User {  //In dieser Funktion stellen wir sicher das auch jedes Feld einen Wert hat, auch wenn der user z.B. den Note speichern konnte ohne einen Titel einzugeben, wie auch immer.
    const user = new User({
      firstName: obj.firstName,
      lastName: obj.lastName,
      birthDate: obj.birthDate,
      street: obj.street,
      zipCode: obj.zipCode, // Standardwert für zipCode, falls nicht vorhanden
      city: obj.city,
      email: obj.email,   // Standardwert für city, falls nicht vorhanden
      id: obj.id
    });
    return user;
  }

  getRefUsers() {
    return collection(this.firestore, 'users');
  }


  /*getRef(collId: string) {
    return collection(this.firestore, collId);
  }*/

  async addUser(collId: string, item: any) {
    await addDoc(this.getRefUsers(), item).catch(
      (err) => { console.log(err) }
    ).then(
      (docRef) => {
        console.log('Document writen with ID: ', docRef);
      })
  }
  progressBar = false;
  dialog: any;

  async updateUser(user: User, dialogRef: any) {
    debugger;
    this.progressBar = true;

    if (user.id) {
      let colRef = this.getSingleDocRef('users', user.id);
      await updateDoc(colRef, this.getCleanJson(user)).catch(
        (err) => { console.log(err) }).then(() => {
          this.progressBar = false;
          dialogRef.close();
        })    }
  }

  getCleanJson(user: User) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      street: user.street,
      zipCode: user.zipCode,
      city: user.city,
      email: user.email,
      id: user.id

    }
  }

}
