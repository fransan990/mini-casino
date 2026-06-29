export class BetAmount {
  private readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static create(value: number): BetAmount {
    if (!Number.isInteger(value)) {
      throw new Error("Bet amount must be an integer.");
    }

    if (value <= 0) {
      throw new Error("Bet amount must be greater than 0.");
    }

    return new BetAmount(value);
  }

  getValue(): number {
    return this.value;
  }
}
