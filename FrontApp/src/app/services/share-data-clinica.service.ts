import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataClinicaService {
  private dateSubject = new BehaviorSubject<string | undefined>(undefined);
  private timeSubject = new BehaviorSubject<string | undefined>(undefined);
  private vaccineSubject = new BehaviorSubject<string | undefined>(undefined);
  private clinicSubject = new BehaviorSubject<string | undefined>(undefined);
  
  date$ = this.dateSubject.asObservable();
  time$ = this.timeSubject.asObservable();
  vaccine$ = this.vaccineSubject.asObservable();
  clinic$ = this.clinicSubject.asObservable();

  setDate(date: string | undefined) {
    this.dateSubject.next(date);
  }

  setTime(time: string | undefined) {
    this.timeSubject.next(time);
  }

  setVaccine(vaccine: string | undefined) {
    this.vaccineSubject.next(vaccine);
  }

  setClinic(clinic: string | undefined) {
    this.clinicSubject.next(clinic);
  }
}
