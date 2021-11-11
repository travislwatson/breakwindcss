import { css } from '@emotion/css'
import { Properties } from 'csstype'

export const simpleRule = <TRule extends keyof Properties>(
  rule: TRule,
  value: Properties[TRule]
) => css({ [rule]: value })
