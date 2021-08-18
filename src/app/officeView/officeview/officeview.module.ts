import { NgModule } from "@angular/core";
import {OfficeviewComponent} from './officeview.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfficeViewRoutingModule } from './officeview-routing.module';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
    imports:[
        CommonModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
        OfficeViewRoutingModule,
        MatMenuModule
    ],
    entryComponents:[OfficeviewComponent],
    declarations:[OfficeviewComponent],
    exports:[OfficeviewComponent],
})
export class OfficeViewModule {}