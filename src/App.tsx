import './App.css'
import { useCallback, useEffect, useState } from 'react'
import BoardComponent from './components/BoardComponent.tsx'
import LostFiguresComponent from './components/LostFiguresComponent.tsx'
import TimerComponent from './components/TimerComponent.tsx'
import { Board } from './models/Board.ts'
import { Colors } from './models/Colors.ts'
import { Player } from './models/Player.ts'

function App() {
  const [board, setBoard] = useState(new Board())

  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const restart = useCallback(() => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }, [])

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [whitePlayer, restart])

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    )
  }

  return (
    <div className='app'>
      <TimerComponent currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFiguresComponent
          title='Black figures'
          figures={board.lostBlackFigures}
        />
        <LostFiguresComponent
          title='White figures'
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  )
}

export default App
