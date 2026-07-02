/**
 * @file Unit Tests - eos
 * @module mark-util-character/tests/unit/eos
 */

import { codes } from '@flex-development/mark-util-symbol'
import testSubject from '../eos.mts'

describe('unit:eos', () => {
  it('should return `false` if `code` is not `codes.eos`', () => {
    expect(testSubject(codes.bos)).to.be.false
  })

  it('should return `true` if `code` is `codes.eos`', () => {
    expect(testSubject(codes.eos)).to.be.true
  })
})
