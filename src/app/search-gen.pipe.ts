import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGen'
})
export class SearchGenPipe implements PipeTransform {

  transform(items: any[], searchGen: string): any {
    if (!items) {
      return [];
    }
    if (!searchGen) {
      return items;
    }
    searchGen = searchGen.toLowerCase();
    return items.filter( it => {
      const email = it.email;
      return email.toLowerCase().includes(searchGen);
    })
  }

}
