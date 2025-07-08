import type { FC } from 'react'
import type { Cell } from '../models/Cell.ts'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <button
      type='button'
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className='available' />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
    </button>
  )
}

export default CellComponent
