import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES} from '../mock_games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game = GAMES;
  selectedGame: Game;
  // @ts-ignore
  // game: Game = {
  //   id: 1,
  //   name: 'Super Mario Bros',
  //   overview: ''
  // };
  constructor() { }

  ngOnInit() { }
  onSelect(game: Game): void {
    this.selectedGame = game;
  }
}
