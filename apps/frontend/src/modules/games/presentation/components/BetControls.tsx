type BetControlsProps = {
  betAmount: number;
  onBetAmountChange: (amount: number) => void;
  onPlay: () => void;
  isPlaying?: boolean;
};

export function BetControls({
  betAmount,
  onBetAmountChange,
  onPlay,
  isPlaying = false,
}: BetControlsProps) {
  return (
    <section>
      <label htmlFor="bet-amount">Bet amount</label>

      <input
        id="bet-amount"
        type="number"
        min="1"
        value={betAmount}
        onChange={(event) => onBetAmountChange(Number(event.target.value))}
      />

      <button type="button" onClick={onPlay} disabled={isPlaying}>
        {isPlaying ? "Playing..." : "Play"}
      </button>
    </section>
  );
}
