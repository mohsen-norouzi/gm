import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Control } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  controls: Control[] = [
    {
      "field": "name",
      "label": "Name",
      "type": "text",
      "hidden": "false",
      "mandatory": true
    },
    {
      "field": "email",
      "label": "Email",
      "type": "text",
      "hidden": "false",
      "mandatory": true
    },
    {
      "field": "confirm",
      "label": "Checkbox with confirmation",
      "type": "check",
      "hidden": "false"
    },
    {
      "field": "hiddenField",
      "label": "",
      "type": "text",
      "hidden": "true",
      "mandatory": false
    }
  ]

  ngOnInit(): void {

  }
}
