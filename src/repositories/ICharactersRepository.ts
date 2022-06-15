interface Character {
  name: string;
  wisdom: number;
  proficiency: number;
  perception: boolean;
}

export interface ICharactersRepository {
  all: () => Character[];
}