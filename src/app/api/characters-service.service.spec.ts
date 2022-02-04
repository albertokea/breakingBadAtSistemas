import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CharactersServiceService', () => {
  let charactersService: CharactersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
    });
    charactersService = TestBed.inject(CharactersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get all characters', () => {
    charactersService.getAll().subscribe((characters) => {
      expect(characters).toBeTruthy('No characters response');
      const character = characters.find((character) => (character.char_id = 2));
      expect(character?.name).toEqual(
        'Jesse Pinkman',
        'Name should be Jesse Pinkman'
      );
    });
    const req = httpTestingController.expectOne(
      'https://www.breakingbadapi.com/api/characters'
    );
    expect(req.request.method).toBe('GET');
  });
});
