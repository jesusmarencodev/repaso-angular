import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Pikolo',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 20000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 15000,
    },
  ];

  onNewCharacterFromChild(character: Character): void {
    this.characters.push({...character, id: uuid()});
  }

  onDeleteCharacter(id: string): void {
   this.characters =  this.characters.filter(c => c.id !== id);
  }
}
