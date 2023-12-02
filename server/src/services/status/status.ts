// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import type { Application } from '../../declarations'
import { StatusService, getOptions } from './status.class'
import { statusPath, statusMethods } from './status.shared'

export * from './status.class'

// A configure function that registers the service and its hooks via `app.configure`
export const status = (app: Application) => {
  // Register our service on the Feathers application
  app.use(statusPath, new StatusService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: statusMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })

}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [statusPath]: StatusService
  }
}
