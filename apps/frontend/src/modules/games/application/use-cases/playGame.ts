import type { PlayGameDTO } from "../dto/PlayGameDTO";
import { gamesApi } from "../../infrastructure/api/gamesApi";
import { BetAmount } from "../../domain/value-objects/BetAmount";

export async function playGame(dto: PlayGameDTO) {
  const betAmount = BetAmount.create(dto.betAmount);

  return gamesApi.playGame({
    ...dto,
    betAmount: betAmount.getValue(),
  });
}
