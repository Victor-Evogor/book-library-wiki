// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import { Conflict } from '@feathersjs/errors'
import type { HookContext } from '../declarations'
import { UserService } from '../services/users/users.class'

export const preventDuplicateUsers = async (context: HookContext) => {
  console.log(`Running hook prevent-duplicate-users on ${context.path}.${context.method}`)
  const { email } = context.data as { email: string; password: string }
  const users = await (context.service as UserService).find({
    query: {
      email
    }
  })
  if (users.data.length > 0) {
    throw new Conflict('User already exists')
  }

  return context
}
