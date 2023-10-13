import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation';
import Cardboard from './components/Cardboard';

function App() {
  const [score, setScore] = useState(0);

  const changeScore = (newScore) => {
    setScore(newScore);
  };

  function newGame() {
    setScore(0);
  }

  return(
    <>
      <Navigation changeScore={changeScore} scoreState = {score}  />
      <Cardboard changeScore={changeScore} scoreState = {score}  newGame={newGame}/>
    </>
  )
}

export default App
