import type { PlayGameDTO } from "../../application/dto/PlayGameDTO";
import type { Game } from "../../domain/models/Game";
import type { GameResult } from "../../domain/models/GameResult";

const API_URL = import.meta.env.VITE_API_URL;

export const gamesApi = {
  async getGames(): Promise<Game[]> {
    const response = await fetch(`${API_URL}/games`);

    if (!response.ok) {
      throw new Error("Error fetching games.");
    }

    return response.json();
  },

  async playGame(dto: PlayGameDTO): Promise<GameResult> {
    const response = await fetch(`${API_URL}/games/${dto.gameSlug}/play`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        betAmount: dto.betAmount,
      }),
    });

    if (!response.ok) {
      throw new Error("Error playing game.");
    }

    return response.json();
  },
};
