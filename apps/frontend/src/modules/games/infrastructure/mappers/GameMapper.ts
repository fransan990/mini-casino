import type { Game } from "../../domain/models/Game";

type GameApiResponse = {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
};

export class GameMapper {
  static fromApi(data: GameApiResponse): Game {
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      isActive: data.isActive,
    };
  }
}
