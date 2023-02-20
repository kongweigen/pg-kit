import clone from './clone.js'

export default async (path) => {
  return await clone(
    'peigen-cli/template-doc',
    path || 'doc',
  )
}
