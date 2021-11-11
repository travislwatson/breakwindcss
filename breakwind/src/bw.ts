import { css, cx } from '@emotion/css'
// import { layout } from './layout'
import { borders } from './borders'

const allRules = {
  ...borders,
}

type Rules = keyof typeof allRules

type BwArgs = Rules[]

const ruleCache: Partial<Record<Rules, ReturnType<typeof css>>> = {}
const cache: Record<string, string> = {}

export const bw = (...args: BwArgs) => {
  const cacheKey = args.join(',')
  if (!cache.hasOwnProperty(cacheKey)) {
    for (const ruleName of args) {
      if (!ruleCache.hasOwnProperty(ruleName)) {
        ruleCache[ruleName] = css(allRules[ruleName] as any)
      }
    }
    const rules = args.map((i) => ruleCache[i])
    cache[cacheKey] = cx(...rules)
  }

  return cache[cacheKey]
}
