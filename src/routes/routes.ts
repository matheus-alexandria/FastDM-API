import { Router, Request, Response } from 'express';
import { PrismaCharactersRepository } from '../repositories/implementations/PrismaCharactersRepository';

/**
 * Party
 * Character
 * 
 * Fazer as consultas baseadas em parties formadas, analisando os dados dos jogadores ligados as parties
 */

type Method = 'highest' | 'above'

interface RequestData {
  method: Method;
}

const routes = Router();

routes.get('/perception');

// Return all existing characters
routes.get('/', (request: Request, response: Response) => {
  const prismaCharactersRepository = new PrismaCharactersRepository();

  const characters = prismaCharactersRepository.all();

  return response.json(characters);
});


// Creates a new character
routes.post('/create', (request: Request, response: Response) => {
  const { name, wisdom, proficiency, perception } = request.body;

  const prismaCharactersRepository = new PrismaCharactersRepository();

  const characters = prismaCharactersRepository.all();

  const lenght = characters.push({
    name,
    wisdom,
    proficiency, 
    perception,
  });

  return response.json(characters[lenght - 1]);
});

export { routes }