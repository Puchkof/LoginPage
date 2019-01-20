import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  login: string;
  @Input() dropdownName: string;
  @Input() defaultOption: string;

  @Output() valueChooseEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendSelectedValue(message){
    this.valueChooseEvent.emit(message);
  }
}
