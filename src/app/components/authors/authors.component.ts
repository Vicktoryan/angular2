import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonEnums } from '../../enums/CommonEnums';
type author = { id: string, name: string };
type loadedAuthor = { id: number, lastName: string };
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: [ './authors.component.scss' ]
})

export class AuthorsComponent implements OnInit, OnChanges {
  @Input('authors') auth: { id: number, lastName: string }[];
  @Output() changeAuthors = new EventEmitter();
  public dropDownOpen = false;
  public items: author[] = [];
  public selectedItems: author[] = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.http.get(`${CommonEnums.apiUrl}authors`)
    .subscribe((
      list: author[]
    ) => {
      this.items = list;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.auth && changes.auth.currentValue) {
      this.selectedItems = changes.auth.currentValue.map((itm: loadedAuthor) => {
        return {
          id: itm.id.toString(),
          name: itm.lastName
        }
      });
    }
  }

  public selectItem(author: author): void {
    this.selectedItems.push(author);
    this.changeAuthors.emit(this.selectedItems);
  }

  public removeItem(author: author): void {
    this.selectedItems.splice(this.selectedItems.indexOf(author), 1);
    this.changeAuthors.emit(this.selectedItems);
  }

}
