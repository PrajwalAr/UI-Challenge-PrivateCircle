import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainsService } from '../../services/domains.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit {
  detailsList$: Observable<Array<string>>;

  constructor(private domainService: DomainsService) {}

  ngOnInit(): void {
    this.detailsList$ = this.domainService.domainDetails;
  }
}
