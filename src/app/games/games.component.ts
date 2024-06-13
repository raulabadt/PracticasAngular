import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
       id:1,
      name: 'Uncharted 4'
    },
    {
      id:2,
      name: 'The last of us'
    },

    {
      id:3,
      name: 'Bloodborne'
    }
   
  ]
}
