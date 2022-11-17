import {Component, ViewChild} from '@angular/core';
import {Person} from "./Person";
import {ChildComponentComponent} from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent {
  model = new Person(1, '');
  submitted = false;


  onSubmit() {
    this.submitted = true;
  }
  onNewPerson(){
    this.model = new Person(2,'');
  }

}
