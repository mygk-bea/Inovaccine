import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dateSubject = new BehaviorSubject<string | undefined>(undefined);
  private timeSubject = new BehaviorSubject<string | undefined>(undefined);
  private vaccineSubject = new BehaviorSubject<string | undefined>(undefined);
  private paymentSubject = new BehaviorSubject<string | undefined>(undefined);

  date$ = this.dateSubject.asObservable();
  time$ = this.timeSubject.asObservable();
  vaccine$ = this.vaccineSubject.asObservable();
  payment$ = this.paymentSubject.asObservable();

  setDate(date: string | undefined) {
    this.dateSubject.next(date);
  }

  setTime(time: string | undefined) {
    this.timeSubject.next(time);
  }

  setVaccine(vaccine: string | undefined) {
    this.vaccineSubject.next(vaccine);
  }

  setPayment(payment: string | undefined) {
    this.paymentSubject.next(payment);
  }
}
