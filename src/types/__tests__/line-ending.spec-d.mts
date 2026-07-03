/**
 * @file Type Tests - LineEnding
 * @module mark-util-character/types/tests/unit-d/LineEnding
 */

import type { codes } from '@flex-development/mark-util-symbol'
import type TestSubject from '../line-ending.mts'

describe('unit-d:types/LineEnding', () => {
  it('should extract typeof codes.cr', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.cr>().not.toBeNever()
  })

  it('should extract typeof codes.crlf', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.crlf>().not.toBeNever()
  })

  it('should extract typeof codes.lf', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.lf>().not.toBeNever()
  })

  it('should extract typeof codes.ls', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.ls>().not.toBeNever()
  })

  it('should extract typeof codes.ps', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.ps>().not.toBeNever()
  })

  it('should extract typeof codes.vcr', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.vcr>().not.toBeNever()
  })

  it('should extract typeof codes.vlf', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.vlf>().not.toBeNever()
  })
})
