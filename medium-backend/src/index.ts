//aiven pe dala h

import { Hono } from 'hono'

import { userRouter } from './route/user'
import { blogRouter } from './route/blog'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;//we have to explicitly define the type of variable,as typescript is unable to know what is imported from toml file
    JWT_SECRET:string;
  }
}>()

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)


export default app



