import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  constructor() { }

  private characters: Character[] =
    [
      {
        id: uuid(),
        name: 'Krillin',
        power: 1002
      },
      {
        id: uuid(),
        name: 'Goku',
        power: 9500
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 7350
      }
    ];

  getCharacters(): Character[] {
    return this.characters;
  }

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  removeCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
