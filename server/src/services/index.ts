import { status } from './status/status'
import { wiki } from './wikis/wikis'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(status)
  app.configure(wiki)
  app.configure(user)
  // All services will be registered here
}
