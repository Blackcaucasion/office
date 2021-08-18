import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { AddStaffComponent } from './add-staff.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';




@NgModule({
    imports:[CommonModule,
        MatDialogModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    declarations:[AddStaffComponent],
    entryComponents:[AddStaffComponent],
    exports:[AddStaffComponent]
})
export class AddStaffModule{}