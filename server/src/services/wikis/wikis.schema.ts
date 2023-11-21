// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { WikiService } from './wikis.class'
import { Conflict } from '@feathersjs/errors'

// Main data model schema
export const wikiSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    image: Type.String(),
    description: Type.String(),
    likes: Type.Number(),
    publishDate: Type.String(),
    user: Type.String()
  },
  { $id: 'Wiki', additionalProperties: false }
)
export type Wiki = Static<typeof wikiSchema>
export const wikiValidator = getValidator(wikiSchema, dataValidator)
export const wikiResolver = resolve<Wiki, HookContext<WikiService>>({})

export const wikiExternalResolver = resolve<Wiki, HookContext<WikiService>>({})

// Schema for creating new entries
export const wikiDataSchema = Type.Pick(wikiSchema, ['name', 'description', 'image', 'user'], {
  $id: 'WikiData'
})
export type WikiData = Static<typeof wikiDataSchema>
export const wikiDataValidator = getValidator(wikiDataSchema, dataValidator)
export const wikiDataResolver = resolve<Wiki, HookContext<WikiService>>({
  publishDate: async () => new Date().toString(),
  likes: async () => 0,
  user: async (value, _, context) => {
    const result = await context.app.service('users').find({
      query: {
        email: value
      }
    })
    if (result.data.length === 0) {
      throw new Conflict(`No user ${value} exists`)
    }
    return value
  }
})

// Schema for updating existing entries
export const wikiPatchSchema = Type.Partial(wikiSchema, {
  $id: 'WikiPatch'
})
export type WikiPatch = Static<typeof wikiPatchSchema>
export const wikiPatchValidator = getValidator(wikiPatchSchema, dataValidator)
export const wikiPatchResolver = resolve<Wiki, HookContext<WikiService>>({})

// Schema for allowed query properties
export const wikiQueryProperties = Type.Pick(wikiSchema, ['_id', 'name'])
export const wikiQuerySchema = Type.Intersect(
  [
    querySyntax(wikiQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type WikiQuery = Static<typeof wikiQuerySchema>
export const wikiQueryValidator = getValidator(wikiQuerySchema, queryValidator)
export const wikiQueryResolver = resolve<WikiQuery, HookContext<WikiService>>({})
