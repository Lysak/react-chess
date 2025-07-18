import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'
import type { Cell } from '../Cell'
import { type Color, Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Knight extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
