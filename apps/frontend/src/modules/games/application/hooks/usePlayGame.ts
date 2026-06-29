import { useState } from "react";
import type { GameResult } from "../../domain/models/GameResult";
import { playGame } from "../use-cases/playGame";

export function usePlayGame() {
  const [result, setResult] = useState<GameResult | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function play(gameSlug: string, betAmount: number) {
    try {
      setIsPlaying(true);
      setError(null);

      const gameResult = await playGame({
        gameSlug,
        betAmount,
      });

      setResult(gameResult);
    } catch {
      setError("Could not play game.");
    } finally {
      setIsPlaying(false);
    }
  }

  return {
    result,
    isPlaying,
    error,
    play,
  };
}
