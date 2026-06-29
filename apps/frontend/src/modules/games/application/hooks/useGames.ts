import { useEffect, useState } from "react";
import type { Game } from "../../domain/models/Game";
import { getGames } from "../use-cases/getGames";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGames() {
      try {
        setIsLoading(true);
        setError(null);

        const gamesList = await getGames();
        setGames(gamesList);
      } catch {
        setError("Could not load games.");
      } finally {
        setIsLoading(false);
      }
    }

    loadGames();
  }, []);

  return {
    games,
    isLoading,
    error,
  };
}
