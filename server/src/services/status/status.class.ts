// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'

type Status = {message: string}
type StatusData = any
type StatusPatch = any
type StatusQuery = any

export type { Status, StatusData, StatusPatch, StatusQuery }

export interface StatusServiceOptions {
  app: Application
}

export interface StatusParams extends Params<StatusQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class StatusService<ServiceParams extends StatusParams = StatusParams>
  implements ServiceInterface<Status, StatusData, ServiceParams, StatusPatch>
{
  constructor(public options: StatusServiceOptions) {}

  async find(_params?: ServiceParams): Promise<Status> {
    return { message: 'server alive' }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
