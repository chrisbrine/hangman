import { EDifficulty } from "@/app/data/difficulty";

export default function newWord({ newWord }: { newWord: (difficulty: EDifficulty) => void }) {
  return (
    <div className="flex flex-row">
      <button
        className="text-2xl mx-1 my-1 font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.EASY)}
      >
        New Easy (1)
      </button>
      <button
        className="text-2xl mx-1 my-1 font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.MEDIUM)}
      >
        New Medium (2)
      </button>
      <button
        className="text-2xl mx-1 my-1 font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.HARD)}
      >
        New Hard (3)
      </button>
      <button
        className="text-2xl mx-1 my-1 font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.EXTREME)}
      >
        New Extreme (4)
      </button>
    </div>
  );
}