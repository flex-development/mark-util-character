/**
 * @file Unit Tests - eol
 * @module mark-util-character/tests/unit/eol
 */

import { codes } from '@flex-development/mark-util-symbol'
import testSubject from '../eol.mts'

describe('unit:eol', () => {
  it('should return `false` if `code` is not line ending code', () => {
    expect(testSubject(codes.space)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['cr'],
    ['crlf'],
    ['lf'],
    ['ls'],
    ['ps'],
    ['vcr'],
    ['vlf']
  ])('should return `true` if `code` is line ending code (`codes.%s`)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
