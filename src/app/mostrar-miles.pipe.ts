import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    
    return (value < 100) ? 'Menos de 100 vistas' : 'Más de 100 vistas';
  }

  //******************** EJEMPLO ****************************
  /*transform(number: number, ...args: unknown[]): unknown {
    if (isNaN(number)) return null; //Verificar que sea un número sino retorna null
    if (number === null) return null; //si es null retorna un null
    if (number === 0) return null; //si es un 0 retorna un null
    let abs = Math.abs(number); //asegurarse de colocar el número en positivo
    const rounder = Math.pow(10, 1);
    const isNegative = number < 0;
    let key = '';

    const powers = [ //colocar nomenclaturas (miles, millones, bytes, kb, etc)
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: 1000 }
    ];

    for (let i = 0; i < powers.length; i++) {
      let reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
      return (isNegative ? '-' : '') + abs + key;
    }

  }*/

}
