type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type DigitXX<T extends Digit> =
  `${T}${Digit}${Digit}` extends `${infer N extends number}` ? N : never;
