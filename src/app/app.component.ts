import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Control } from './models';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  controlSubscription = new Subscription();
  controls: Control[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.controlSubscription = this.dataService.getControls().subscribe(data => this.controls = data);
  }

  ngOnDestroy(): void {
    this.controlSubscription.unsubscribe();
  }
}
