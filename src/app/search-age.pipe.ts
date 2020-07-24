import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAge'
})
export class SearchAgePipe implements PipeTransform {

  transform(items: any[], searchAge: string): any {
    if (!items) {
      return [];
    }
    if (!searchAge) {
      return items;
    }
    searchAge = searchAge.toLowerCase();
    return items.filter( it => {
      const age = it.dob.age;
      return age.toLowerCase().includes(searchAge);
      // followed the pattern of the other pipes, didn't work because
      // I think that it has to do with number vs string
      // need to work on this more. Tried some things but need more work.
    })
  }

}
