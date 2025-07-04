export const Colors = {
    WHITE: 'white',
    BLACK: 'black',
} as const;

export type Colors = (typeof Colors)[keyof typeof Colors];
