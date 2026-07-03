/**
 * @file checker
 * @module mark-util-character/lib/checker
 */

import LARGEST_CODE_POINT from '#internal/largest-code-point'
import { codes } from '@flex-development/mark-util-symbol'
import type { Code, CodeCheck } from '@flex-development/mark/parse'

export default checker

/**
 * Create a code check from a regular expression.
 *
 * @see {@linkcode CodeCheck}
 *
 * @this {void}
 *
 * @param {RegExp | string} test
 *  The regular expression or the regular expression pattern
 * @return {CodeCheck}
 *  The code check
 */
function checker(this: void, test: RegExp | string): CodeCheck {
  return check.bind(typeof test === 'string' ? new RegExp(test) : test)

  /**
   * Check whether `codes` matches the bound regex.
   *
   * @this {RegExp}
   *  The regular expression to match against
   *
   * @param {Code} code
   *  The character code
   * @return {boolean}
   *  Whether the character code matches the bound regex
   */
  function check(this: RegExp, code: Code): boolean {
    if (typeof code !== 'number') return false // possible eos code.
    if (code <= codes.vs) return false // virtual code.
    if (Number.isNaN(code)) return false // invalid code point.

    // greater than largest value returned by `codePointAt`.
    if (code > LARGEST_CODE_POINT) return false

    // check valid code point.
    return this.test(String.fromCodePoint(code))
  }
}
