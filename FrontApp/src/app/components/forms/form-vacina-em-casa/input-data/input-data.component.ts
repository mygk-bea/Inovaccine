import { Component, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service'; 
import { ShareDataClinicaService } from 'src/app/services/share-data-clinica.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss'],
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule
  ]
})
export class InputDataComponent {
  @Output() dateTimeChange = new EventEmitter<string>();

  constructor(private dataSharingService: DataSharingService,private shareDataClinicaService: ShareDataClinicaService) {}

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate) {
      const currentDateTime = this.combineDateWithCurrentTime(selectedDate);
      const formattedDate = this.formatDate(currentDateTime);
      this.dataSharingService.setDate(formattedDate);
      this.shareDataClinicaService.setDate(formattedDate);
      this.dateTimeChange.emit(formattedDate);
    }
  }

  private combineDateWithCurrentTime(date: Date): Date {
    const now = new Date();
    const combinedDate = new Date(date);
    combinedDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
    return combinedDate;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
