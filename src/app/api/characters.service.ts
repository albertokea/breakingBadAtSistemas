import { Injectable } from '@angular/core';
import { Character, CharacterQuote } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>('characters');
  }

  getRandomCharacterQuote(characterName: string): Observable<CharacterQuote[]> {
    return this.http.get<CharacterQuote[]>(
      `quote/random?author=${characterName}`
    );
  }
}
