export type GameResult = {
  gameSlug: string;
  betAmount: number;
  profit: number;
  balanceAfter: number;
  result: "win" | "lose" | "draw";
};
