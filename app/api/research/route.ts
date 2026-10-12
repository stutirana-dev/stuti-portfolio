const query = `
  *[_type == "research"] | order(_createdAt desc) {
    title,
    "summary": coalesce(summary, ""),
    "category": coalesce(category, "Independent Research"),
    "topic": coalesce(topic, "Other"),
    "format": coalesce(type, "Research Paper"),
    "url": coalesce(externalUrl, document.asset->url, "")
  }
`

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const url =
      'https://g7n5htka.api.sanity.io/v2025-01-01/data/query/production?query=' +
      encodeURIComponent(query)

    const response = await fetch(url, {cache: 'no-store'})

    if (!response.ok) {
      throw new Error(`Sanity returned ${response.status}`)
    }

    const data = await response.json()

    return Response.json(data.result ?? [])
  } catch (error) {
    console.error('Sanity research error:', error)

    return Response.json(
      {error: 'Unable to load research'},
      {status: 502}
    )
  }
}
