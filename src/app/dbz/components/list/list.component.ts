import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [];

  @Output()
  public removeCharacterEvent = new EventEmitter<string>();

  displayedColumns: string[] = ['item','name', 'power', 'actions'];

  removeCharacterById(id: string): void {
    this.removeCharacterEvent.emit(id);
  }

}