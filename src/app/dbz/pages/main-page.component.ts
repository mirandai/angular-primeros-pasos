
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceTsService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainpageComponent {
  public characters: Character[];

  constructor(private dbzService: DbzServiceTsService) {
    this.characters = this.dbzService.getCharacters();
  }

  addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  removeCharacter(id: string): void {
    this.dbzService.removeCharacterById(id);
    this.characters = this.dbzService.getCharacters();
  }
  
}