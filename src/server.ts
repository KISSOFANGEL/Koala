import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/',async (ctx) =>{
  ctx.body = 'hello world2'
})
app.use(router.routes());
app.listen(3000, () =>{
  console.log('Koa is running http://localhost:3000')
})