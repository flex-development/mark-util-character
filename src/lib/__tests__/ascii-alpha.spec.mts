/**
 * @file Unit Tests - asciiAlpha
 * @module mark-util-character/lib/tests/unit/asciiAlpha
 */

import lower from '#fixtures/lower'
import upper from '#fixtures/upper'
import { codes } from '@flex-development/mark-util-symbol'
import testSubject from '../ascii-alpha.mts'

describe('unit:lib/asciiAlpha', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.byteOrderMarker],
    [codes.digit3],
    [codes.replacementCharacter],
    [codes.space],
    [codes.tilde]
  ])('should return `false` without ascii alpha (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(lower)('should return `true` given ascii lower alpha (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each(upper)('should return `true` given ascii upper alpha (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
