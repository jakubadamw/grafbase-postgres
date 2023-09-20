import { g, connector, config } from '@grafbase/sdk'

const neon = connector.Neon('Neon', {
  url: g.env('NEON_DATABASE_URL')
})

g.datasource(neon)

export default config({
  schema: g
})
