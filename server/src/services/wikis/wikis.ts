// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  wikiDataValidator,
  wikiPatchValidator,
  wikiQueryValidator,
  wikiResolver,
  wikiExternalResolver,
  wikiDataResolver,
  wikiPatchResolver,
  wikiQueryResolver
} from './wikis.schema'

import type { Application } from '../../declarations'
import { WikiService, getOptions } from './wikis.class'
import { wikiPath, wikiMethods } from './wikis.shared'

export * from './wikis.class'
export * from './wikis.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const wiki = (app: Application) => {
  // Register our service on the Feathers application
  app.use(wikiPath, new WikiService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: wikiMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(wikiPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(wikiExternalResolver),
        schemaHooks.resolveResult(wikiResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(wikiQueryValidator), schemaHooks.resolveQuery(wikiQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(wikiDataValidator), schemaHooks.resolveData(wikiDataResolver)],
      patch: [schemaHooks.validateData(wikiPatchValidator), schemaHooks.resolveData(wikiPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [wikiPath]: WikiService
  }
}
