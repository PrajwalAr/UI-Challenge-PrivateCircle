import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { Domain } from 'src/app/models/domain';
import { DomainsService } from 'src/app/services/domains.service';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss'],
})
export class ContentTableComponent implements OnInit {
  columns = ['Date', 'List Name', 'No.of Entities', 'Action', ' '];
  domains: Array<Domain> = [];
  selected: number = null;
  domainsSubscription: Subscription;
  searchText$: Observable<string>;
  constructor(private domainService: DomainsService) {}

  ngOnInit(): void {
    this.domainsSubscription = this.domainService.domainsListStream.subscribe(
      (domains: Array<Domain>) => {
        this.domains = domains;
      }
    );
    this.domainService.fetchDomainsList();
    this.searchText$ = this.domainService.domainListSearch;
  }

  sendDetails(detail: Array<string>, index: number) {
    this.selected = index;
    this.domainService.domainDetails.next(detail);
  }

  ngOnDestroy() {
    this.domainsSubscription.unsubscribe();
  }
}
