import './App.css'
import BoardComponent from './components/BoardComponent.tsx'
import { useEffect, useState } from 'react'
import { Board } from './models/Board.ts'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  return (
    <>
      <div className='app'>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          // currentPlayer={currentPlayer}
          // swapPlayer={swapPlayer}
        />
      </div>
    </>
  )
}

export default App
