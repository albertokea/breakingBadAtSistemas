export interface Character {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
  nickname: string;
}

export interface CharacterQuote {
  quote_id: number;
  quote: string;
  author: string;
}
