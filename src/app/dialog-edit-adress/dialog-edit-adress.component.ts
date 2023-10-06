import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FirebaseserviceService } from '../firebaseservice.service';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent {

  user!: User;

progressBar = false;

constructor(public dialog: MatDialog, public fireStore: FirebaseserviceService, public dialogRef: MatDialogRef<DialogEditAdressComponent>) {

}


saveUser() {

}
}
 