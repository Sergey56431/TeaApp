import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLengthWord'
})
export class MaxLengthWordPipe implements PipeTransform {

  transform(value: string, maxLength: number = 100): string {
    if (value && value.length > maxLength) {
      value = value.substring(0, maxLength) + '...';
    }
    return value;
  }

}
