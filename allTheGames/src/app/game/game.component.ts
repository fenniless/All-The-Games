import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game[];
  // selectedGame: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }
  getGames(): void {
    this.gameService.getGames().subscribe(game => this.game = game);
  }
}
