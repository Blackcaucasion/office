import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OfficeService } from 'src/app/shared/office.service';
import { Office } from 'src/models/staff.models';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {
  public readonly OfficeName = new FormControl();
  public readonly EmailAddress = new FormControl();
  public readonly OfficeTell = new FormControl();
  public readonly OfficeAddress = new FormControl();
  public readonly MaxNumberOfOccupants = new FormControl();
  public readonly OfficeColor = new FormControl();

  public readonly EditOfficeForm = new FormGroup({

    name: this.OfficeName,
    email: this.EmailAddress,
    tellNumber: this.OfficeTell,
    address: this.OfficeAddress,
    maxNumberOfOccupants: this.MaxNumberOfOccupants,
    OfficeColor: this.OfficeColor

  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditOfficeComponent>,
    private readonly officeservice: OfficeService,

  ) { }

 public ngOnInit(): void {
  // get office and patch form 
this.officeservice.getOffice(this.data.key.key).subscribe(
  res => {
    var item=  res.payload.data() as Office ;
    console.log(item)
    this.EditOfficeForm.patchValue({
      name:item.name

    })
  },
  err => {
    console.debug(err);
  }

)

  }

  public save() {
    var key:string =this.data.key.key
    const office: Office = {
      id:key,
      name:this.OfficeName?.value as string,
      location:this.OfficeAddress?.value as string,
      email:this.EmailAddress?.value as string,
      tellNumber:this.OfficeTell?.value as string,
      maxNumberOfOccupants:this.MaxNumberOfOccupants.value as number,
      color:this.OfficeColor.value as string
    }
    this.officeservice.updateOffice(office)
  }

}
