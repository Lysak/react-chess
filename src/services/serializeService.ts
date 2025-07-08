import type { Board } from '../models/Board'

export function serializeBoard(board: Board) {
  return board.cells.map((row) =>
    row.map((cell) => ({
      x: cell.x,
      y: cell.y,
      color: cell.color,
      available: cell.available,
      figure: cell.figure
        ? {
            type: cell.figure.constructor.name,
            color: cell.figure.color,
          }
        : null,
    })),
  )
}
