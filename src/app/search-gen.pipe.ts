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
      const gender = it.gender;
      return gender.toLowerCase().includes(searchGen);
    })
  }

}
