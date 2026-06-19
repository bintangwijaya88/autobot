import { getQuery, getRequestHeaders, getRequestURL, proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const path = event.context.params?.path || ''
  const target = new URL(`/api/${path}`, config.apiBase)
  const query = new URLSearchParams(getQuery(event) as Record<string, string>)

  for (const [key, value] of query.entries()) {
    target.searchParams.append(key, value)
  }

  return proxyRequest(event, target.toString(), {
    fetchOptions: {
      headers: {
        ...getRequestHeaders(event),
        host: target.host,
        origin: target.origin,
        referer: getRequestURL(event).origin,
      },
    },
  })
})
