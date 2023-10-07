import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseserviceService } from '../firebaseservice.service';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

userId;

constructor(private route:ActivatedRoute, public serviceFireStore: FirebaseserviceService, public dialog: MatDialog) {
  this.userId = this.route.snapshot.paramMap.get('id');
console.log(this.userId);
this.getUser(this.userId);
}
user: any;


async getUser(userId: any) {
 this.user
 = await this.serviceFireStore.getAnUser('users', userId);
console.log(this.user);
}

editUserDetail(): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent) //hier fügen wir die Komponente ein die geöffnet werden soll. In diesem Fall, "DialogAddUserComponent", weil da unser Dialog enthalten ist.
      dialogRef.componentInstance.user = new User(this.user.toJson());  // Mit dieser Zeile greifen wir auf die DialogEditAdressComponent zu und lagern die user in dieser component dort ein um auf daten zuzugreifen.
      dialogRef.componentInstance.userId = this.userId;  // Mit dieser Zeile greifen wir auf die DialogEditAdressComponent zu und lagern die user in dieser component dort ein um auf daten zuzugreifen.

}

editMenu() {
  const dialogRef = this.dialog.open(DialogEditAdressComponent);
  dialogRef.componentInstance.user = new User(this.user.toJson());  // Mit dieser Zeile greifen wir auf die DialogEditAdressComponent zu und lagern die user in dieser component dort ein um auf daten zuzugreifen.
  dialogRef.componentInstance.userId = this.userId;  // Mit dieser Zeile greifen wir auf die DialogEditAdressComponent zu und lagern die user in dieser component dort ein um auf daten zuzugreifen.

}

}
