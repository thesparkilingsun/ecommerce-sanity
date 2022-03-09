import { createClient } from 'sanity-codegen'
import { Documents } from '../schema'
const proc = require('process')

const project = proc.env.SANITY_PROJECT_ID ?? ''
const data = proc.env.SANITY_DATASET ?? ''
const v = proc.env.SANITY_APIVERSION ?? ''
const tok = ''

const client = createClient<Documents>({
  projectId: project,
  dataset: data,
  apiVersion: v,
  useCdn: false,
  token: tok,
  previewMode: true,
  fetch,
})

export default client
