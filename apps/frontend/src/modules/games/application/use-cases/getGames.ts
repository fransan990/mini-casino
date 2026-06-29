import { gamesApi } from "../../infrastructure/api/gamesApi";

export async function getGames() {
  return gamesApi.getGames();
}
