import { Injectable } from '@angular/core';
import { Game} from './game';
import { GAMES} from './mock_games';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getGames(): Observable<Game[]> {
    return of(GAMES);
  }
}
