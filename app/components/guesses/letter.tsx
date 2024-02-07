export default function Letter({
  chosen,
  wrong,
  onClick,
  letter,
  gameOver,
}: {
  chosen: boolean,
  wrong: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  letter: string,
  gameOver: boolean,
}) {
  const basicClasses = 'text-2xl h-14 w-10 mx-1 my-1 font-bold border-2 border-[#ffffff] rounded-md p-2';
  const correctLetterClasses = 'bg-[#37f664] text-[#0b3d3a]';
  const incorrectLetterClasses = 'bg-[red] text-[#ffffff]';
  const gameOverUnselectedLetterClasses = 'bg-[#0b3d3a] text-[#ffffff] cursor-default'; 
  const unselectedLetterClasses = 'bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out';
  const selectedLetterClasses = wrong ? incorrectLetterClasses : correctLetterClasses;
  const classes = `${basicClasses} ${chosen ? selectedLetterClasses : gameOver ? gameOverUnselectedLetterClasses : unselectedLetterClasses}`;
  // use tailwind to color and decorate both chosen and unchosen letters as if they are keyboard keys
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={chosen}
    >
      {letter}
    </button>
  );
}