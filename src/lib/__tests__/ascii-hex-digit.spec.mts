/**
 * @file Unit Tests - asciiHexDigit
 * @module mark-util-character/lib/tests/unit/asciiHexDigit
 */

import digits from '#fixtures/digits'
import { codes } from '@flex-development/mark-util-symbol'
import testSubject from '../ascii-hex-digit.mts'

describe('unit:lib/asciiHexDigit', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.byteOrderMarker],
    [codes.replacementCharacter],
    [codes.space],
    [codes.uppercaseH],
    [codes.uppercaseI],
    [codes.uppercaseJ],
    [codes.uppercaseK],
    [codes.uppercaseL],
    [codes.uppercaseM],
    [codes.uppercaseN],
    [codes.uppercaseO],
    [codes.uppercaseP],
    [codes.uppercaseQ],
    [codes.uppercaseR],
    [codes.uppercaseS],
    [codes.uppercaseT],
    [codes.uppercaseU],
    [codes.uppercaseV],
    [codes.uppercaseW],
    [codes.uppercaseX],
    [codes.uppercaseY],
    [codes.uppercaseZ],
    [codes.lowercaseG],
    [codes.lowercaseH],
    [codes.lowercaseI],
    [codes.lowercaseJ],
    [codes.lowercaseK],
    [codes.lowercaseL],
    [codes.lowercaseM],
    [codes.lowercaseN],
    [codes.lowercaseO],
    [codes.lowercaseP],
    [codes.lowercaseQ],
    [codes.lowercaseR],
    [codes.lowercaseS],
    [codes.lowercaseT],
    [codes.lowercaseU],
    [codes.lowercaseV],
    [codes.lowercaseW],
    [codes.lowercaseX],
    [codes.lowercaseY],
    [codes.lowercaseZ]
  ])('should return `false` without ascii hex digit (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(digits)('should return `true` given ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.uppercaseA],
    [codes.uppercaseB],
    [codes.uppercaseC],
    [codes.uppercaseD],
    [codes.uppercaseE],
    [codes.uppercaseF]
  ])('should return `true` given ascii alpha [A,F] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.lowercaseA],
    [codes.lowercaseB],
    [codes.lowercaseC],
    [codes.lowercaseD],
    [codes.lowercaseE],
    [codes.lowercaseF]
  ])('should return `true` given ascii alpha [a,f] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
