import { TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should get data from db successfully', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);

    const fakeData = [{
      "field": "name",
      "label": "Name",
      "type": "text",
      "hidden": "false",
      "mandatory": true
    }]

    let spy = spyOn(dataService, 'getControls').and.returnValue(Promise.resolve(fakeData));
    fixture.detectChanges();
    tick();
    expect(app.controls).toBe(fakeData);
  }))

});
