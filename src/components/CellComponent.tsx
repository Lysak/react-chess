import React, {type FC} from 'react';
import type {Cell} from "../models/Cell.ts";

interface CellProps {
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div
            className={['cell', cell.color].join(' ')}
        >

        </div>
    );
};

export default CellComponent;
