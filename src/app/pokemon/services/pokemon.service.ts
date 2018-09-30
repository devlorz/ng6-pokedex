import { Injectable } from '@angular/core';
import { colorCode, titleColorCode } from './colorCode';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() {}

  getColorCode(colorName: string): string {
    if (colorCode.has(colorName)) {
      return colorCode.get(colorName);
    }
    return '#fff';
  }

  getTitleColorCode(colorName: string): string {
    if (titleColorCode.has(colorName)) {
      return titleColorCode.get(colorName);
    }
    return '#fff';
  }
}
