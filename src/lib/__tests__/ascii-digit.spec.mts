/**
 * @file Unit Tests - asciiDigit
 * @module mark-util-character/lib/tests/unit/asciiDigit
 */

import DIGITS from '#fixtures/digits'
import { codes } from '@flex-development/mark-util-symbol'
import testSubject from '../ascii-digit.mts'

describe('unit:lib/asciiDigit', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.byteOrderMarker],
    [codes.lowercaseA],
    [codes.replacementCharacter],
    [codes.space],
    [codes.uppercaseA]
  ])('should return `false` without ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(DIGITS)('should return `true` given ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
