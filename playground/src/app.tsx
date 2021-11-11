import { cx } from '@emotion/css'
import { bw } from '../../breakwind/src/main'

const prior = bw('rounded-md')

export const App = () => (
  <div
    className={cx(prior, bw('rounded-t-none'))}
    style={{ outline: '1px solid red' }}
  >
    Hello
  </div>
)
