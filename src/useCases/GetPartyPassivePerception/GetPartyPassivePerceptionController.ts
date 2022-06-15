import { Request, Response } from "express";
import { PrismaCharactersRepository } from "../../repositories/implementations/PrismaCharactersRepository";
import { GetPartyPassivePerceptionUseCase } from "./GetPartyPassivePerceptionUseCase";

class GetPartyPassivePerceptionController {
  handle(request: Request, response: Response) {
    const { method, reference } = request.query;
  
    const prismaCharactersRepository = new PrismaCharactersRepository();
    const getPartyPassivePerceptionUseCase = new GetPartyPassivePerceptionUseCase(prismaCharactersRepository);

    const passives = getPartyPassivePerceptionUseCase.execute(String(method), Number(reference));
  
    return response.json(passives);
  };
}

export { GetPartyPassivePerceptionController };