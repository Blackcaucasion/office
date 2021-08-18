import { NgModule } from "@angular/core";
import { AddOfficeComponent } from "./add-office.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    imports: [ReactiveFormsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule],
    declarations: [AddOfficeComponent],
    entryComponents: [AddOfficeComponent],
    exports: [AddOfficeComponent]
})
export class AddOfficeModule { }