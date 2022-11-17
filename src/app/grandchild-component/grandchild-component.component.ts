import { Component } from '@angular/core';
import {Person} from "../parent-form/Person";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-grandchild-component',
  templateUrl: './grandchild-component.component.html',
  styleUrls: ['./grandchild-component.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class GrandchildComponentComponent {
  grandchild = new Person(10,'');
}
