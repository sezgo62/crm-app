import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
user!: User;
progressBar = false;
birthDate: any;

constructor(public dialoRef: MatDialogRef<DialogAddUserComponent>, public serviceFirebase: FirebaseserviceService) {
  console.log(this.user);

}

}
