import React, { type FC, useCallback, useEffect, useState } from 'react'
import type { Board } from '../models/Board'
import type { Cell } from '../models/Cell'
import type { Player } from '../models/Player'
import { serializeBoard } from '../services/serializeService'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const click = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      }
    }
  }

  const updateBoard = useCallback(() => {
    const newBoard = board.getCopyBoard()

    if (
      JSON.stringify(serializeBoard(newBoard)) !==
      JSON.stringify(serializeBoard(board))
    ) {
      setBoard(newBoard)
    }
  }, [board, setBoard])

  const highlightCells = useCallback(() => {
    if (!selectedCell) return

    board.highlightCells(selectedCell)
    updateBoard()
  }, [selectedCell, board, updateBoard])

  useEffect(() => {
    highlightCells()
  }, [highlightCells])

  return (
    <div>
      <h3>Current player {currentPlayer?.color}</h3>
      <div className='board'>
        {board.cells.map((row: Cell[]) => (
          <React.Fragment key={row.map((cell) => cell.id).join('-')}>
            {row.map((cell) => (
              <CellComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default BoardComponent
