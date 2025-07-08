import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import type { Cell } from '../Cell.ts'
import { type Color, Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'

export class King extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }

  canMove(target: Cell): boolean {
    // if (!super.canMove(target)) {
    //   return false
    // }
    //
    // return true
    return super.canMove(target)
  }
}
