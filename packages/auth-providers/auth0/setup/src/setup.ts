import yargs from 'yargs'

import { standardAuthBuilder } from '@redwoodjs/cli-helpers'

export const command = 'auth0'
export const description = 'Generate an auth configuration for Auth0'

export function builder(yargs: yargs.Argv) {
  return standardAuthBuilder(yargs)
}

export interface Args {
  force: boolean
}

export async function handler(options: Args) {
  const { handler } = await import('./setupHandler.js')
  return handler(options)
}
