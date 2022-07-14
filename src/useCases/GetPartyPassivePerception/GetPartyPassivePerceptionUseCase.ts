import { ICharactersRepository } from '../../repositories/ICharactersRepository';

class GetPartyPassivePerceptionUseCase {
  constructor(private charactersRepository: ICharactersRepository) {}

  execute(method: string, reference: number) {
    const characters = this.charactersRepository.all();

    const passives = characters.map((char) => {
      const bonus = char.wisdom - 10 !== 0 ? Math.floor((char.wisdom - 10) / 2) : 0;

      const passive = char.perception ? 10 + bonus + char.proficiency : 10 + bonus;

      return {
        passive,
        name: char.name,
      };
    });

    if (reference) {
      const greaters = passives.filter((passive) => passive.passive >= reference);

      return greaters;
    }

    if (method === 'highest') {
      let max = -Infinity;

      passives.forEach((passive) => {
        max = Math.max(max, passive.passive);
      });

      const highers = passives.filter((p) => p.passive === max);

      return highers;
    }

    return passives;
  }
}

export { GetPartyPassivePerceptionUseCase };
