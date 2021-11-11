import { l } from './types'

export const borders = l({
  // Border Radius
  'rounded-none': { borderRadius: '0px' },
  'rounded-sm': { borderRadius: '0.125rem' },
  rounded: { borderRadius: '0.25rem' },
  'rounded-md': { borderRadius: '0.375rem' },
  'rounded-lg': { borderRadius: '0.5rem' },
  'rounded-xl': { borderRadius: '0.75rem' },
  'rounded-2xl': { borderRadius: '1rem' },
  'rounded-3xl': { borderRadius: '1.5rem' },
  'rounded-full': { borderRadius: '9999px' },
  'rounded-t-none': {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  'rounded-t-sm': {
    borderTopLeftRadius: '0.125rem',
    borderTopRightRadius: '0.125rem',
  },
  'rounded-t': {
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
  },
  'rounded-t-md': {
    borderTopLeftRadius: '0.375rem',
    borderTopRightRadius: '0.375rem',
  },
  'rounded-t-lg': {
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
  },
  'rounded-t-xl': {
    borderTopLeftRadius: '0.75rem',
    borderTopRightRadius: '0.75rem',
  },
  'rounded-t-2xl': {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  'rounded-t-3xl': {
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
  },
  'rounded-t-full': {
    borderTopLeftRadius: '9999px',
    borderTopRightRadius: '9999px',
  },
  'rounded-r-none': {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  'rounded-r-sm': {
    borderTopRightRadius: '0.125rem',
    borderBottomRightRadius: '0.125rem',
  },
  'rounded-r': {
    borderTopRightRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
  },
  'rounded-r-md': {
    borderTopRightRadius: '0.375rem',
    borderBottomRightRadius: '0.375rem',
  },
  'rounded-r-lg': {
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
  },
  'rounded-r-xl': {
    borderTopRightRadius: '0.75rem',
    borderBottomRightRadius: '0.75rem',
  },
  'rounded-r-2xl': {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },
  'rounded-r-3xl': {
    borderTopRightRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
  'rounded-r-full': {
    borderTopRightRadius: '9999px',
    borderBottomRightRadius: '9999px',
  },
  'rounded-b-none': {
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  'rounded-b-sm': {
    borderBottomRightRadius: '0.125rem',
    borderBottomLeftRadius: '0.125rem',
  },
  'rounded-b': {
    borderBottomRightRadius: '0.25rem',
    borderBottomLeftRadius: '0.25rem',
  },
  'rounded-b-md': {
    borderBottomRightRadius: '0.375rem',
    borderBottomLeftRadius: '0.375rem',
  },
  'rounded-b-lg': {
    borderBottomRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
  },
  'rounded-b-xl': {
    borderBottomRightRadius: '0.75rem',
    borderBottomLeftRadius: '0.75rem',
  },
  'rounded-b-2xl': {
    borderBottomRightRadius: '1rem',
    borderBottomLeftRadius: '1rem',
  },
  'rounded-b-3xl': {
    borderBottomRightRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
  },
  'rounded-b-full': {
    borderBottomRightRadius: '9999px',
    borderBottomLeftRadius: '9999px',
  },
  'rounded-l-none': {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  'rounded-l-sm': {
    borderTopLeftRadius: '0.125rem',
    borderBottomLeftRadius: '0.125rem',
  },
  'rounded-l': {
    borderTopLeftRadius: '0.25rem',
    borderBottomLeftRadius: '0.25rem',
  },
  'rounded-l-md': {
    borderTopLeftRadius: '0.375rem',
    borderBottomLeftRadius: '0.375rem',
  },
  'rounded-l-lg': {
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
  },
  'rounded-l-xl': {
    borderTopLeftRadius: '0.75rem',
    borderBottomLeftRadius: '0.75rem',
  },
  'rounded-l-2xl': {
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
  },
  'rounded-l-3xl': {
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
  },
  'rounded-l-full': {
    borderTopLeftRadius: '9999px',
    borderBottomLeftRadius: '9999px',
  },
  'rounded-tl-none': { borderTopLeftRadius: '0px' },
  'rounded-tl-sm': { borderTopLeftRadius: '0.125rem' },
  'rounded-tl': { borderTopLeftRadius: '0.25rem' },
  'rounded-tl-md': { borderTopLeftRadius: '0.375rem' },
  'rounded-tl-lg': { borderTopLeftRadius: '0.5rem' },
  'rounded-tl-xl': { borderTopLeftRadius: '0.75rem' },
  'rounded-tl-2xl': { borderTopLeftRadius: '1rem' },
  'rounded-tl-3xl': { borderTopLeftRadius: '1.5rem' },
  'rounded-tl-full': { borderTopLeftRadius: '9999px' },
  'rounded-tr-none': { borderTopRightRadius: '0px' },
  'rounded-tr-sm': { borderTopRightRadius: '0.125rem' },
  'rounded-tr': { borderTopRightRadius: '0.25rem' },
  'rounded-tr-md': { borderTopRightRadius: '0.375rem' },
  'rounded-tr-lg': { borderTopRightRadius: '0.5rem' },
  'rounded-tr-xl': { borderTopRightRadius: '0.75rem' },
  'rounded-tr-2xl': { borderTopRightRadius: '1rem' },
  'rounded-tr-3xl': { borderTopRightRadius: '1.5rem' },
  'rounded-tr-full': { borderTopRightRadius: '9999px' },
  'rounded-br-none': { borderBottomRightRadius: '0px' },
  'rounded-br-sm': { borderBottomRightRadius: '0.125rem' },
  'rounded-br': { borderBottomRightRadius: '0.25rem' },
  'rounded-br-md': { borderBottomRightRadius: '0.375rem' },
  'rounded-br-lg': { borderBottomRightRadius: '0.5rem' },
  'rounded-br-xl': { borderBottomRightRadius: '0.75rem' },
  'rounded-br-2xl': { borderBottomRightRadius: '1rem' },
  'rounded-br-3xl': { borderBottomRightRadius: '1.5rem' },
  'rounded-br-full': { borderBottomRightRadius: '9999px' },
  'rounded-bl-none': { borderBottomLeftRadius: '0px' },
  'rounded-bl-sm': { borderBottomLeftRadius: '0.125rem' },
  'rounded-bl': { borderBottomLeftRadius: '0.25rem' },
  'rounded-bl-md': { borderBottomLeftRadius: '0.375rem' },
  'rounded-bl-lg': { borderBottomLeftRadius: '0.5rem' },
  'rounded-bl-xl': { borderBottomLeftRadius: '0.75rem' },
  'rounded-bl-2xl': { borderBottomLeftRadius: '1rem' },
  'rounded-bl-3xl': { borderBottomLeftRadius: '1.5rem' },
  'rounded-bl-full': { borderBottomLeftRadius: '9999px' },
  // Border Width
  'border-0': { borderWidth: '0px' },
  'border-2': { borderWidth: '2px' },
  'border-4': { borderWidth: '4px' },
  'border-8': { borderWidth: '8px' },
  border: { borderWidth: '1px' },
  'border-t-0': { borderTopWidth: '0px' },
  'border-t-2': { borderTopWidth: '2px' },
  'border-t-4': { borderTopWidth: '4px' },
  'border-t-8': { borderTopWidth: '8px' },
  'border-t': { borderTopWidth: '1px' },
  'border-r-0': { borderRightWidth: '0px' },
  'border-r-2': { borderRightWidth: '2px' },
  'border-r-4': { borderRightWidth: '4px' },
  'border-r-8': { borderRightWidth: '8px' },
  'border-r': { borderRightWidth: '1px' },
  'border-b-0': { borderBottomWidth: '0px' },
  'border-b-2': { borderBottomWidth: '2px' },
  'border-b-4': { borderBottomWidth: '4px' },
  'border-b-8': { borderBottomWidth: '8px' },
  'border-b': { borderBottomWidth: '1px' },
  'border-l-0': { borderLeftWidth: '0px' },
  'border-l-2': { borderLeftWidth: '2px' },
  'border-l-4': { borderLeftWidth: '4px' },
  'border-l-8': { borderLeftWidth: '8px' },
  'border-l': { borderLeftWidth: '1px' },
  // Border Color
  // Border Opacity
  // Border Style
  // Divide Width
  // Divide Color
  // Divide Opacity
  // Divide Style
  // Ring Width
  // Ring Color
  // Ring Opacity
  // Ring Offset Width
  // Ring Offset Color
})
