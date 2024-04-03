import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(canFly: boolean ): string {
    return ( canFly )
      ? 'vuela'
      : 'no vuela';
  }
}
