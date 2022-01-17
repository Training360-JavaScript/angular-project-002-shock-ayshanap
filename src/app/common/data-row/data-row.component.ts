import { User } from './../../model/user';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  onSelectClicked() : void {
    this.selectClick.emit(this.dataRow);
  }

  onUpdateClicked() : void {
    this.updateClick.emit(this.dataRow);
  }

  onDeleteClicked() : void {
    this.deleteClick.emit(this.dataRow);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
