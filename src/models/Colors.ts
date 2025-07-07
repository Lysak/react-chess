// Define a union type for colors.
export type Color = 'white' | 'black'

// Create a record that maps each key to its value.
export const Colors: Record<Uppercase<Color>, Color> = {
  WHITE: 'white',
  BLACK: 'black',
}
