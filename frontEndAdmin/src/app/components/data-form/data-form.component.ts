import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent  implements OnInit {

  forms!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {;

    this.forms = this.formBuilder.group({
      nomeClinica: [null],
      nomeMedico: [null],
    });

  }

}
