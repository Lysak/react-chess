import React, { type FC, useCallback, useEffect, useState } from 'react'
import type { Board } from '../models/Board.ts'
import type { Cell } from '../models/Cell.ts'
import { serializeBoard } from '../services/serializeService.ts'
import CellComponent from './CellComponent.tsx'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const click = (cell: Cell) => {
    if (cell.figure) {
      setSelectedCell(cell)
    }
  }

  const highlightCells = useCallback(() => {
    if (!selectedCell) return

    board.highlightCells(selectedCell)
    const newBoard = board.getCopyBoard()

    if (
      JSON.stringify(serializeBoard(newBoard)) !==
      JSON.stringify(serializeBoard(board))
    ) {
      setBoard(newBoard)
    }
  }, [selectedCell, board, setBoard])

  useEffect(() => {
    highlightCells()
  }, [highlightCells])

  return (
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
  )
}

export default BoardComponent
