/**
 * @file E2E Tests - api
 * @module mark-util-character/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-character'

describe('e2e:mark-util-character', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
