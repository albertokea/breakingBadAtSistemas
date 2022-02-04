import { Injectable } from '@angular/core';
import { Character, CharacterQuote } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl: string;
  characters: Character[] = [];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://www.breakingbadapi.com/api/';
  }

  getAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters`);
  }

  getRandomCharacterQuote(characterName: string): Observable<CharacterQuote[]> {
    return this.httpClient.get<CharacterQuote[]>(
      `${this.baseUrl}quote/random?author=${characterName}`
    );
  }
}
