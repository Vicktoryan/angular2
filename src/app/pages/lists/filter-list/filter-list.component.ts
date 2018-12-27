import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  searchValue: string;
  @Output() search = new EventEmitter();
  constructor() { }

  public ngOnInit() {
  }

  public onSearch(): void {
    this.search.emit(this.searchValue);
  }
}
