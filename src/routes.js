import { Router } from 'express'
// const { request, response } = require("./app")
import { v4 } from 'uuid'
import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'cleverson',
    email: 'cleverson1984@hotmail.com',
    password_hash: 'postgres',
  })
  return response.json(user)
})

export default routes
