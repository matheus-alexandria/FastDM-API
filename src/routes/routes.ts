import { Router, Request, Response } from 'express';

/**
 * Party
 * Character
 * 
 * Fazer as consultas baseadas em parties formadas, analisando os dados dos jogadores ligados as parties
 */

interface Character {
  name: string;
  wisdom: number;
  proficiency: number;
  perception: boolean;
}

type Method = 'highest' | 'above'

interface RequestData {
  method: Method;
}

const routes = Router();

const characters: Character[] = [
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

routes.get('/perception', (request: Request, response: Response) => {
  const { method, reference } = request.query;

  const passives = characters.map((char) => {
    const bonus = char.wisdom - 10 != 0 ? Math.floor((char.wisdom - 10) / 2) : 0;

    const passive = char.perception ? 10 + bonus + char.proficiency : 10 + bonus;

    return {
      passive,
      name: char.name,
    };
  });

  if (method === 'highest') {
    let max = -Infinity;

    passives.forEach((passive) => {
      max = Math.max(max, passive.passive)
    });

    const highers = passives.filter((p) => p.passive === max);

    return response.json(highers);
  }

  if (method === 'above' && reference) {
    const greaters = passives.filter((passive) => passive.passive >= parseInt(String(reference)));

    return response.json(greaters);
  }

  return response.json(passives);
});

// Return all existing characters
routes.get('/', (request: Request, response: Response) => {
  return response.json(characters);
});


// Creates a new character
routes.post('/create', (request: Request, response: Response) => {
  const { name, wisdom, proficiency, perception } = request.body;

  const lenght = characters.push({
    name,
    wisdom,
    proficiency, 
    perception,
  });

  return response.json(characters[lenght - 1]);
});

export { routes }