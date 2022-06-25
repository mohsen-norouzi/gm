import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Control } from 'src/app/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() controls?: Control[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
