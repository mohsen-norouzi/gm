import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create a text field', () => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    component.controls = [{
      "field": "name",
      "label": "Name",
      "type": "text",
      "hidden": "false",
      "mandatory": true
    }]

    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector(`input[name='name']`)).toBeTruthy()
  });
});
