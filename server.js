const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start () {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, `${port}에서 실행중`)
}

start()
