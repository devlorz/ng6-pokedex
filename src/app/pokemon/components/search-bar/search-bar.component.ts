import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output()
  search = new EventEmitter<string>();

  public searchText: string;

  constructor() {}

  ngOnInit() {}

  public onSearch(text: string) {
    this.search.emit(text);
  }
}
