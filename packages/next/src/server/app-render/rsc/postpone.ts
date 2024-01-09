/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/

// When postpone is available in canary React we can switch to importing it directly
import React from 'react'

const hasPostpone = typeof React.unstable_postpone === 'function'

/**
 * This component will call `React.postpone` that throws the postponed error.
 */
type PostponeProps = {
  reason: string
}
export function Postpone({ reason }: PostponeProps): never {
  // Call the postpone API now with the reason set to "force-dynamic".
  if (hasPostpone) {
    return React.unstable_postpone(reason)
  }
  throw new Error(
    'Invariant: Postpone component expected `postpone` to exist in React.'
  )
}
