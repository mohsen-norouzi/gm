import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Control } from './models';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  controls$ = new Observable<Control[]>()

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.controls$ = this.dataService.getControls();
  }
}
