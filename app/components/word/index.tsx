function Letter({
  correct,
  letters,
  letter,
  gameOver,
}: {
  correct: Set<string>,
  letters: Set<string>,
  letter: string,
  gameOver: boolean,
}) {
  const baseClassNames = "text-2xl";
  const correctClassNames = "bg-[#0b3d3a] text-[#ffffff]";
  const incorrectClassNames = "bg-[#0b3d3a] text-[red] underline";
  const unselectedClassNames = "bg-[#0b3d3a] text-[#ffffff]";
  const selectedClassNames = correct.has(letter) ? correctClassNames : gameOver ? incorrectClassNames : unselectedClassNames;
  const classNames = `${baseClassNames} ${selectedClassNames}`;
  return (
    <div className={classNames}>
      {correct.has(letter) || gameOver ? letter : "_"}
    </div>
  );
}

export default function Word({
  word,
  correct,
  gameOver,
}: {
  word: string,
  correct: Set<string>,
  gameOver: boolean,
}) {
  const letters = word.split('');
  return (
    <section className="flex justify-around space-x-4 my-4">
      {letters.length > 0 ? letters.map((letter, index) => 
        <Letter key={index} correct={correct} letters={new Set(letters)} letter={letter} gameOver={gameOver} />
      ) : <div className="text-2xl">_</div>}
    </section>
  );
}