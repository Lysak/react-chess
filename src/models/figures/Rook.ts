import { Figure, FigureNames } from './Figure.ts'
import { Colors } from '../Colors.ts'
import type { Cell } from '../Cell.ts'
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }
}
