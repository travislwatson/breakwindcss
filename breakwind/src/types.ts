import { PropertiesFallback } from 'csstype'

export type BwLookup = Record<string, PropertiesFallback<number | string>>

/**
 * This function does nothing but provide Typescript constraint.
 * https://stackoverflow.com/a/49539369
 */
export const l = <
  T extends { [name: string]: PropertiesFallback<number | string> }
>(
  i: T
) => i
