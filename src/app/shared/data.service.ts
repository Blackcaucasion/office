import { Injectable } from '@angular/core';
import { OfficeService } from './office.service';
import { Office, Staff } from 'src/models/staff.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //class holds state
  public officeList: Array<Office> = [];

  public offices$: BehaviorSubject<Office[]> = new BehaviorSubject<Office[]>(this.officeList) ;

  public staffList: Array<Staff> = [];

  public staff$: BehaviorSubject<Staff[]> = new BehaviorSubject<Staff[]>(this.staffList);


  constructor() { }

  public get offices(){
    return this.offices$;
  }
  public setOffices(offices:Office[]){
    this.offices$.next(offices);
  }
  public get staff(){
    return this.staff$;
  }
  public setStaff(staff:Staff[]){
    this.staff$.next(staff);
  }
  
}
