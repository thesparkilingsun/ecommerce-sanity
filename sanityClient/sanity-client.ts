import sanityClient from '@sanity/client';

const proc = require('process');

const project = proc.env.SANITY_PROJECT_ID ?? '';
const data = proc.env.SANITY_DATASET ?? '';
const v = proc.env.SANITY_APIVERSION ?? '';
const tok = '';

export default sanityClient({
  projectId: project,
  dataset: data,
  apiVersion: v,
  useCdn: false,
  token: tok,
});
