import { Pipe, PipeTransform } from '@angular/core';
import { Domain } from '../models/domain';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Domain>, searchText: string): any {
    if (!value.length || !searchText) {
      return value;
    }

    const domains: Array<Domain> = [];
    for (let domain of value) {
      if (domain.listName.toLowerCase().includes(searchText.toLowerCase())) {
        domains.push(domain);
      }
    }
    return domains;
  }
}
