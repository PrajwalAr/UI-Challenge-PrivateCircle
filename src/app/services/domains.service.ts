import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Domain } from '../models/domain';

@Injectable({
  providedIn: 'root',
})
export class DomainsService {
  private domainsListUrl: string = 'http://localhost:3000/vendorList';
  private domainsListAdd = new Subject<Array<Domain>>();
  public domainListSearch = new Subject<string>();
  public domainDetails = new Subject<Array<string>>();
  public domainsListStream = this.domainsListAdd.asObservable();

  constructor(private http: HttpClient) {}

  public fetchDomainsList() {
    this.http
      .get<any>(this.domainsListUrl)
      .subscribe((domains: Array<Domain>) => {
        this.domainsListAdd.next([...domains]);
      });
  }
}
