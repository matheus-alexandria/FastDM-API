interface Character {
  name: string;
  wisdom: number;
  proficiency: number;
  perception: boolean;
}

class PrismaCharactersRepository {
  private characters: Character[] = [
    {
      name: 'Snikki',
      wisdom: 14,
      proficiency: 3,
      perception: true,
    },
    {
      name: 'Astrid',
      wisdom: 10,
      proficiency: 3,
      perception: false,
    },
    {
      name: 'Zé',
      wisdom: 8,
      proficiency: 3,
      perception: false,
    },
    {
      name: 'Merith',
      wisdom: 14,
      proficiency: 3,
      perception: true,
    },
  ];

  all() {
    return this.characters;
  }
}

export { PrismaCharactersRepository };
