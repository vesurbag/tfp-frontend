import { http } from 'core'

export const loadCities = () =>
  http
    .get('dict/cities')
    .then(({ data }) => data)
    .catch(err => console.error(err))
