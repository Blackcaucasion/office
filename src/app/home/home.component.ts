import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { AddOfficeComponent } from './add-office/add-office.component';
import { OfficeService } from '../shared/office.service';
import { DataService } from '../shared/data.service';
import { EditOfficeComponent } from './edit-office/edit-office.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit ,OnDestroy {

  constructor(public dialog:MatDialog,
  public  officeservice:OfficeService,
  public dataservice:DataService,
  
  ) { 

  }
    
    
  public ngOnInit(): void {
   
    this.officeservice.getOffices();
    
  }
  public onEdit(){
    this.dialog.open(EditOfficeComponent,{
      data:{}
    })
  }

  public addOffice(){
    this.dialog.open(AddOfficeComponent,{

    })

}
public ngOnDestroy(): void {
}

}
