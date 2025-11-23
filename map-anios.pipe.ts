import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapAnios',
  standalone: true
})
export class MapAniosPipe implements PipeTransform {
  transform(peliculas: any[]): number[] {
    if (!peliculas || peliculas.length === 0) return [];

    const anios = peliculas.map(p => p['año']);
    const unicos = [...new Set(anios)];
    return unicos.sort((a, b) => b - a);
  }
}
