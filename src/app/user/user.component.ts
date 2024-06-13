import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  username = 'Raul'
  isLoggedin = false;//<-esto esta funcionando como un estado 
  favGame=''; //<-variable donde decimos donde guardar nuestro juego favorito
  getFavorite(gameName:string){
    this.favGame=gameName;
  }

  greet(){
    alert('Raul Abad')
  }

}
