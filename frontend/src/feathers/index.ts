import io from 'socket.io-client'
import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import authentication from '@feathersjs/authentication-client'

const socket = io(import.meta.env.VITE_SERVER)
export const client = feathers()

client.configure(socketio(socket))
client.configure(authentication())

export const post = client.service('posts')
export const user = client.service('users')

