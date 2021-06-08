import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'parentheses'
})
export class ParenthesesPipe implements PipeTransform {

  transform(value: number): string {
    return `(${value})`;
  }

}
