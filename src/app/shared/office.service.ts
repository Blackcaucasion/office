import { Injectable } from '@angular/core';
import { Office, Staff } from '../../models/staff.models'
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  public officesList: Array<Office> = [];
  public staffList: Array<Staff> = [];



  constructor(public firestore: AngularFirestore,
    private dataservice :DataService) { }

  public addOffice(office: Office) {
    return this.firestore.collection('Office').add(office);
  }
  public getOfficess() {
     this.firestore.collection('Office').snapshotChanges().subscribe(
       (data:any)=>{
         
         const temp_offices_data:Office[] = data as Office []
         this.dataservice.setOffices(temp_offices_data as Office[])
       }
     );
  }
  public getOffices() {
    this.firestore.collection('Office').snapshotChanges().subscribe(
      data=>{
        data.map(
          res=>{
            const value = res.payload.doc.data() as Office 
            value.id = res.payload.doc.id
            this.officesList.push(value)
            this.dataservice.setOffices(this.officesList as Office[])
          }
        )
      }
    );
 }

  public getStaff(id: string) {
    return this.firestore.collection(`Office/${id}/Staff`).snapshotChanges().subscribe(
      data=>{
        data.map(
          res=>{
            const value = res.payload.doc.data() as Staff 
            value.id = res.payload.doc.id
            this.staffList.push(value)
            this.dataservice.setStaff(this.staffList as Staff[])
          }
        )
      }
    );
  }
  public updateOffice(office: Office) {
    return this.firestore.doc('Office/' + office.id).update(office);
   
  }
  public getOffice(id:string){
    return this.firestore.collection('Office').doc(id).snapshotChanges()
  }
  public deleteOffice(id: string) {
    return this.firestore.collection('Office').doc(id).delete();
  }

  public addStaff(staff: Staff) {
    return this.firestore.collection(`Office/${staff.office_id}/Staff`).add(staff);
  }

 
}

