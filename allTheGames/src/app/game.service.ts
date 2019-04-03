import { Injectable } from '@angular/core';
import { Game} from './game';
import { GAMES} from './mock_games';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }
  getGames(): Observable<Game[]> {
    this.messageService.add('GameService: fetched games');
    return of(GAMES);
  }
  getGame(id: number): Observable<Game> {
    this.messageService.add(`GameService: fetched game id=${id}`);
    return of(GAMES.find(hero => hero.id === id));
  }
}
