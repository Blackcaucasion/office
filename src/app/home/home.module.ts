import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
    imports:[
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
        MatGridListModule,
        MatMenuModule
    ],
    entryComponents:[HomeComponent],
    exports:[HomeComponent],
    declarations:[HomeComponent],

})
export class homeModule {}