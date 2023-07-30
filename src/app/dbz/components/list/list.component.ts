import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  // Valor por defecto, si no mandan nada
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    },

  ]

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter( id?: number ):void {
  onDeleteCharacter( id?: string ):void {

    console.log(id);
    this

    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
