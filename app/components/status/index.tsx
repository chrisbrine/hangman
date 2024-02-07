export default function Status({
  wrong,
  correct,
  lostSize,
  gameOver,
  losses,
  wins,
} : {
  wrong: Set<string>,
  correct: Set<string>,
  lostSize: number,
  gameOver: boolean,
  losses: number,
  wins: number,
}) {
  const difficultyToString = (difficulty: number) => {
    switch (difficulty) {
      case 12: return "Easy";
      case 9: return "Medium";
      case 6: return "Hard";
      case 3: return "Extreme";
      default: return "Unknown";
    }
  }
  const status = gameOver ? (wrong.size >= lostSize ? "You lost!" : "You won!") : "Keep guessing!";
  return (
    <div className="flex flex-col my-4">
      <div className="text-4xl font-bold text-center">{status}</div>
      <div className="text-sm my-2 text-center">
        {`Wrong guesses: ${wrong.size}/${lostSize} | Correct guesses: ${correct.size} | Difficulty: ${difficultyToString(lostSize)}`}
      </div>
      <div className="text-sm my-2 text-center">
        {`Wins: ${wins} | Losses: ${losses} | Games: ${wins + losses} | Win rate: ${wins + losses > 0 ? Math.floor(wins / (wins + losses) * 100) : 0}%`}
      </div>
    </div>
  );
}
