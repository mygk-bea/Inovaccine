// // import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { HeaderComponent } from 'src/app/components/header/header.component';
// import { NgForm } from '@angular/forms';
// import { Clinica } from 'src/app/core/interfaces/clinica';
// import { ClinicaService } from 'src/app/core/service/clinica.service';
// import { Component, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-teste',
//   templateUrl: './teste.page.html',
//   styleUrls: ['./teste.page.scss'],
//   standalone: true,
//   imports: [HeaderComponent, IonicModule, CommonModule, FormsModule]
// })
// export class TestePage implements OnInit {

//   constructor(private Clinicas: ClinicaService, private clinicaForm: NgForm) { }

//   ngOnInit() {
//     const clinica = this.clinicaForm.form.value;
//     this.Clinicas.cadastrarClinica(clinica);
//   }

// }
