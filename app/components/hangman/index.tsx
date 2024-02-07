export default function Hangman({
  word,
  wrong,
  gameOver,
  lostSize,
}: {
  word: string,
  wrong: Set<string>,
  gameOver: boolean,
  lostSize: number,
}) {
  const difficultySize = () => {
    switch (lostSize) {
      case 3: // Extreme
        return wrong.size * 2;
      case 6: // Hard
        return wrong.size;
      case 9: // Medium
        return Math.floor(wrong.size * 3 / 2);
      case 12: // Easy
        return Math.floor(wrong.size / 2);
      default: // Catch all, likely will never trigger
        return wrong.size;
    }
  }
  const drawHangman = () => {
    const bodyParts = [
      <circle key={5} cx="90" cy="21" r="10" stroke="white" fill="white" />,
      <line key={6} x1="90" y1="31" x2="90" y2="61" stroke="white" />,
      <line key={3} x1="90" y1="41" x2="80" y2="51" stroke="white" />,
      <line key={4} x1="90" y1="41" x2="100" y2="51" stroke="white" />,
      <line key={3} x1="90" y1="61" x2="80" y2="91" stroke="white" />,
      <line key={4} x1="90" y1="61" x2="100" y2="91" stroke="white" />,
    ];
    return bodyParts.slice(0, difficultySize());
  }
  const drawGameOver = () => {
    const x1 = <line x1="84" y1="16" x2="88" y2="21" stroke="red" />;
    const x2 = <line x1="84" y1="21" x2="88" y2="16" stroke="red" />;
    const x3 = <line x1="92" y1="16" x2="96" y2="21" stroke="red" />;
    const x4 = <line x1="92" y1="21" x2="96" y2="16" stroke="red" />;
    return [x1, x2, x3, x4];
  }
  const ifGameOver = () =>
    gameOver && wrong.size >= lostSize;

  return (
    <div className="flex justify-center my-4">
      <svg className="h-48 w-48" viewBox="0 0 90 121">
        <line x1="30" y1="1" x2="30" y2="121" stroke="brown" strokeWidth="2" />
        <line x1="0" y1="121" x2="60" y2="121" stroke="grey" strokeWidth="4" />
        <line x1="30" y1="1" x2="90" y2="1" stroke="brown" strokeWidth="2" />
        <line x1="90" y1="1" x2="90" y2="11" stroke="yellow" />
        {drawHangman()}
        {ifGameOver() && drawGameOver()}
      </svg>
    </div>
  );
}
