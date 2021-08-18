import { NgModule } from "@angular/core";
import { EditOfficeComponent } from './edit-office.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    imports:[
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
    declarations:[EditOfficeComponent],
    entryComponents:[EditOfficeComponent],
    exports:[EditOfficeComponent]
})
export class EditOfficeModule {}