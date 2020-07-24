import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHomeState'
})
export class SearchHomeStatePipe implements PipeTransform {

  transform(items: any[], searchHomeState: string): any {
    if (!items) {
      return [];
    }
    if (!searchHomeState) {
      return items;
    }
    searchHomeState = searchHomeState.toLowerCase();
    return items.filter( it => {
      const homeState = it.location.state;

      return homeState.toLowerCase().includes(searchHomeState);
    })
  }

}
