import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { ActivatedRoute } from '@angular/router';
import { OfficeService } from 'src/app/shared/office.service';
import { Staff } from 'src/models/staff.models';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-officeview',
  templateUrl: './officeview.component.html',
  styleUrls: ['./officeview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OfficeviewComponent implements OnInit,OnDestroy {

  public staffList: Array<Staff> = [];

  public staff$: BehaviorSubject<Staff[]> = new BehaviorSubject<Staff[]>(this.staffList);


  paramKey: any;
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    public officeservice: OfficeService,
    public dataservice:DataService,

  ) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paramKey = params.get('id')
    })

    this.officeservice.getStaff(this.paramKey)
  }
  public addOffice() {

    this.dialog.open(AddStaffComponent, {
      data: { paramKey: this.paramKey }

    })
  }
 public  ngOnDestroy(): void {

  }
}
