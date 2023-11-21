// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Wiki, WikiData, WikiPatch, WikiQuery, WikiService } from './wikis.class'

export type { Wiki, WikiData, WikiPatch, WikiQuery }

export type WikiClientService = Pick<WikiService<Params<WikiQuery>>, (typeof wikiMethods)[number]>

export const wikiPath = 'wikis'

export const wikiMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const wikiClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(wikiPath, connection.service(wikiPath), {
    methods: wikiMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [wikiPath]: WikiClientService
  }
}
