// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Wiki, WikiData, WikiPatch, WikiQuery } from './wikis.schema'

export type { Wiki, WikiData, WikiPatch, WikiQuery }

export interface WikiParams extends MongoDBAdapterParams<WikiQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class WikiService<ServiceParams extends Params = WikiParams> extends MongoDBService<
  Wiki,
  WikiData,
  WikiParams,
  WikiPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('wikis'))
  }
}
