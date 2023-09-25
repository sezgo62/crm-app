import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { FirebaseserviceService } from '../firebaseservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

user = new User();

  constructor(public dialog: MatDialog, public serviceFirebase: FirebaseserviceService) {}

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);

  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, { //hier fügen wir die Komponente ein die geöffnet werden soll. In diesem Fall, "DialogAddUserComponent", weil das unser Dialog enthalten ist.
      //data: {name: this.name},
    });
    
  }


}
