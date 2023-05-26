import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public successMessage: string = '';

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  // Método para enviar el nuevo personaje al componente padre
  sendNewCharacter(form: NgForm): void {
    if (form.invalid) return;

    const newCharacter: Character = {
      id: '',
      name: this.character.name,
      power: this.character.power
    };

    this.onNewCharacter.emit(newCharacter);

    // Limpiar formulario y mostrar mensaje
    form.resetForm();
    this.successMessage = 'Personaje agregado correctamente';
  }


}
