import { Component } from '@angular/core';
import {Person} from "../parent-form/Person";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ChildComponentComponent {

  child = new Person(10,'');

}
