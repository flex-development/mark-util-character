/**
 * @file htab
 * @module mark-util-character/htab
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents a horizontal tab.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.ht | typeof codes.vht}
 *  `true` if `code` is {@linkcode codes.horizontalTab}, {@linkcode codes.ht},
 *  or {@linkcode codes.vht}, `false` otherwise
 */
function htab(
  this: void,
  code: unknown
): code is typeof codes.ht | typeof codes.vht {
  return code === codes.ht || code === codes.vht
}

export default htab
