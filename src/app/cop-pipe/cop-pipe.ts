import { Pipe, PipeTransform } from '@angular/core';

// Formatea números como pesos colombianos: 215500 -> "$ 215.500"
const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

@Pipe({
  name: 'cop',
})
export class CopPipe implements PipeTransform {
  transform(value: number): string {
    return copFormatter.format(value);
  }
}