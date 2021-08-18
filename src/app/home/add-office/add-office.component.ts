import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OfficeService } from 'src/app/shared/office.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddOfficeComponent implements OnInit {
  public readonly OfficeName = new FormControl();
  public readonly EmailAddress = new FormControl();
  public readonly OfficeTell = new FormControl();
  public readonly OfficeAddress = new FormControl();
  public readonly MaxNumberOfOccupants = new FormControl();
  public readonly OfficeColor = new FormControl();

  public readonly AddOfficeForm = new FormGroup({

    name:this.OfficeName,
    email:this.EmailAddress,
    tellNumber:this.OfficeTell,
    address:this.OfficeAddress,
    maxNumberOfOccupants:this.MaxNumberOfOccupants,
    OfficeColor:this.OfficeColor

  })


  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
  public dialogRef:MatDialogRef<AddOfficeComponent>,
  private readonly officeservice:OfficeService,
  private router: Router
  
  ) { }

  ngOnInit(): void {
  }
  public save(){
    this.officeservice.addOffice(this.AddOfficeForm.value);  
    this.AddOfficeForm.reset()
    window.location.reload();
    this.dialogRef.close()    
  }
 public  close(): void {
    this.dialogRef.close();
}

}

