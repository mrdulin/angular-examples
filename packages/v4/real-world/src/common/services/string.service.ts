import { Injectable } from '@angular/core';

@Injectable()
export class StringService {
  public capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
