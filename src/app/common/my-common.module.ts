import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'silverCoins'
})
export class SilverCoinsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} silver coins`;
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SilverCoinsPipe
  ],
  exports: [SilverCoinsPipe]
})
export class MyCommonModule { }
