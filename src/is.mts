/**
 * @file is
 * @module mark-util-character/is
 */

import { codes } from '@flex-development/mark-util-symbol'
import type { Code } from '@flex-development/mark/parse'

/**
 * Check if `value` looks like a character code.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is Code}
 *  `true` if `code` is a number or `null`, `false` otherwise
 */
function is(this: void, value: unknown): value is Code {
  return typeof value === 'number' || value === codes.eos
}

export default is
