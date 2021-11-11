export { normalize } from './normalize'
export { bw } from './bw'

// type BwRule = "p-1" | "p-2";

const styles = {
  // container
  // decoration-slice
  // decoration-clone
  // box-border
  // box-content
  // block: css({ display: 'block' }),
  // "inline-block": css`
  //   display: inline-block;
  // `,
  // inline: css`
  //   display: inline;
  // `,
  // flex: css`
  //   display: flex;
  // `,
  // "inline-flex": css`
  //   display: inline-flex;
  // `,
  // table: css`
  //   display: table;
  // `,
  // "inline-table": css`
  //   display: inline-table;
  // `,
  // "table-caption": css`
  //   display: table-caption;
  // `,
  // "table-cell": css`
  //   display: table-cell;
  // `,
  // "table-column": css`
  //   display: table-column;
  // `,
  // "table-column-group": css`
  //   display: table-column-group;
  // `,
  // "table-footer-group": css`
  //   display: table-footer-group;
  // `,
  // "table-header-group": css`
  //   display: table-header-group;
  // `,
  // "table-row-group": css`
  //   display: table-row-group;
  // `,
  // "table-row": css`
  //   display: table-row;
  // `,
  // "flow-root": css`
  //   display: flow-root;
  // `,
  // grid: css`
  //   display: grid;
  // `,
  // "inline-grid": css`
  //   display: inline-grid;
  // `,
  // contents: css`
  //   display: contents;
  // `,
  // "list-item": css`
  //   display: list-item;
  // `,
  // hidden: css`
  //   display: none;
  // `,
}

type Thing = 'border' | 'ring'
type Color = 'gray' | 'pink'
type Thickness = '50' | '100' | '200' | '300'
type Position = 'outset' | 'inset'

type BorderTest = `border-${Color}` | `border-${Color}-${Thickness}`
type RingTest =
  | `ring-${Color}`
  | `ring-${Color}-${Thickness}`
  | `ring-${Color}-${Position}`
  | `ring-${Color}-${Thickness}-${Position}`

type BothTest = BorderTest | RingTest

type TestArgs =
  | ['border', Color, Thickness]
  | ['ring', Color, Thickness, Position]

const doIt = (...args: TestArgs) => ''

doIt('border', 'gray', '100')
doIt('ring', 'gray', '50', 'inset')

type BwRule = keyof typeof styles | BothTest

type Size = 'sm' | 'md' | 'lg'
type State = 'hover' | 'focus' | 'active' | 'disabled' | 'visited' | 'checked'

type BwRulesArgs =
  | BwRule[]
  | [State | Size, ...BwRule[]]
  | [State, Size, ...BwRule[]]
  | [Size, State, ...BwRule[]]

type BwOutput = {
  toString: () => string
}

// export const bw = (...rules: BwRulesArgs): BwOutput => ({
//   toString: () => 'hello world',
// })

// bw('block')
// bw('active', 'block')
// bw('sm', 'block')
// bw('md', 'checked', '', 'border-gray')

// const Test = () => <div className={1}>Foo</div>
