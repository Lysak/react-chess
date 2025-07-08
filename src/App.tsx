import { useCallback, useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import LostFiguresComponent from './components/LostFiguresComponent.tsx'
import TimerComponent from './components/TimerComponent.tsx'
import { Board } from './models/Board'
import { Colors } from './models/Colors'
import { Player } from './models/Player'

const App = () => {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  console.log(setWhitePlayer, `"lysak"`)
  console.log(setBlackPlayer, `"lysak"`)

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
      <TimerComponent restart={restart} currentPlayer={currentPlayer} />
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
