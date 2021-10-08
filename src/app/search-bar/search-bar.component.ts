import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomainsService } from '../services/domains.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchTextControl = new FormControl();
  constructor(private domainService: DomainsService) {}

  ngOnInit(): void {
    this.searchTextControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchText: string) => {
        this.domainService.domainListSearch.next(searchText);
      });
  }
}
