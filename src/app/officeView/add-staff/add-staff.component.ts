import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { OfficeService } from 'src/app/shared/office.service';
import { Staff } from 'src/models/staff.models';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  public readonly FirstName = new FormControl();
  public readonly LastName = new FormControl();
  public readonly AddStaffForm = new FormGroup({
    firtName: this.FirstName,
    lastName: this.LastName
  })

  constructor(public dialogRef: MatDialogRef<AddStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly officeservice: OfficeService
  ) { console.log(data.paramKey) }

  ngOnInit(): void {
  }
  public save() {
    const staff: Staff = {

      fullName: this.FirstName.value as string + "" + this.LastName.value as string,
      office_id: this.data.paramKey
    }
    this.officeservice.addStaff(staff)
    this.AddStaffForm.reset();
    window.location.reload();
    this.dialogRef.close()
  }

}
