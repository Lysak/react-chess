import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors.ts'
import type { Player } from '../models/Player.ts'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const TimerComponent: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  const decrementBlackTimer = useCallback(() => {
    setBlackTime((prev) => prev - 1)
  }, [])

  const decrementWhiteTimer = useCallback(() => {
    setWhiteTime((prev) => prev - 1)
  }, [])

  const startTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer

    timer.current = setInterval(callback, 1000)
  }, [currentPlayer, decrementWhiteTimer, decrementBlackTimer])

  useEffect(() => {
    startTimer()
  }, [startTimer])

  const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
    <div>
      <div>
        <button type='button' onClick={handleRestart}>
          Restart game
        </button>
      </div>
      <h2>Black: {blackTime}</h2>
      <h2>White: {whiteTime}</h2>
    </div>
  )
}

export default TimerComponent
