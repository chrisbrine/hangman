'use client';
import { useState, useEffect, useCallback } from 'react';
import Hangman from './components/hangman';
import Title from './components/title';
import Word from './components/word';
import Guesses from './components/guesses';
import NewWord from './components/word/new';
import Status from './components/status';
import { chooseRandomWord } from './data/words';
import { EDifficulty } from './data/difficulty';

export default function Home() {
  const [word, setWord] = useState(chooseRandomWord());
  const [lostSize, setLostSize] = useState(EDifficulty.EASY);
  const [wrong, setWrong] = useState(new Set<string>());
  const [letters, setLetters] = useState(new Set<string>(word.split('')));
  const [correct, setCorrect] = useState(new Set<string>());
  const [gameOver, setGameOver] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(()=>{

    setHydrated(true)
    
  }, [])

  const newWord = useCallback((difficulty: EDifficulty = EDifficulty.EASY) => {
    const word = chooseRandomWord();
    setWord(word);
    setLostSize(difficulty);
    setWrong(new Set<string>());
    setCorrect(new Set<string>());
    setLetters(new Set<string>(word.split('')));
    setGameOver(false);
  }, []);

  const selectLetter = useCallback((letter: string) => {
    if (letters.has(letter)) {
      setCorrect(new Set(correct).add(letter));
      if (correct.size + 1 >= letters.size) {
        setGameOver(true);
        setWins(wins + 1);
      }
    } else {
      setWrong(new Set(wrong).add(letter));
      if (wrong.size + 1 >= lostSize) {
        setGameOver(true);
        setLosses(losses + 1);
      }
    }
  }, [letters, correct, wrong, lostSize, wins, losses]);

  const handleKeyPress = useCallback((event: any) => {
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
      selectLetter(event.key.toLowerCase());
    }
  }, [selectLetter]);

  const handleKeyPressUp = useCallback((event: any) => {
    if (event.key === "Enter") {
      newWord(lostSize);
    } else if (event.key === "1") {
      newWord(EDifficulty.EASY);
    } else if (event.key === "2") {
      newWord(EDifficulty.MEDIUM);
    } else if (event.key === "3") {
      newWord(EDifficulty.HARD);
    } else if (event.key === "4") {
      newWord(EDifficulty.EXTREME);
    }
  }, [newWord, lostSize]);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keyup", handleKeyPress);
    document.addEventListener("keyup", handleKeyPressUp);

    // remove the event listener
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
      document.removeEventListener("keyup", handleKeyPressUp);
    };
  }, [handleKeyPress, handleKeyPressUp]);

  return ( hydrated ?
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0b3d3a] text-[#ffffff] text-4xl font-bold">
      <Title />
      <div className="flex justify-center space-x-4">
        <Hangman word={word} wrong={wrong} gameOver={gameOver} lostSize={lostSize} />
        <div className="flex flex-col space-x-4">
          <Word word={word} correct={correct} gameOver={gameOver} />
          <Guesses wrong={wrong} correct={correct} select={selectLetter} gameOver={gameOver} />
        </div>
      </div>
      <NewWord newWord={newWord} />
      <Status wrong={wrong} correct={correct} lostSize={lostSize} gameOver={gameOver} wins={wins} losses={losses} />
    </div>
  : <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0b3d3a] text-[#ffffff] text-4xl font-bold">Loading...</div>
  );
}
