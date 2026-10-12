const query = `{
  "projects": *[_type == "project"] | order(_createdAt desc) {
    "_id": _id, title, description, category, githubUrl, liveUrl, featured
  },
  "certificates": *[_type == "certificate"] | order(date desc) {
    "_id": _id, title, issuer, date, category, description, credentialUrl,
    "imageUrl": certificateImage.asset->url,
    "pdfUrl": certificatePdf.asset->url
  },
  "journey": *[_type == "journey"] | order(startDate desc) {
    "_id": _id, title, organization, category, startDate, endDate, current,
    description, link, "imageUrl": image.asset->url
  }
}`

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const url =
      'https://g7n5htka.api.sanity.io/v2025-01-01/data/query/production?query='
      + encodeURIComponent(query)
    const response = await fetch(url, {cache: 'no-store'})
    if (!response.ok) {
      throw new Error(`Sanity API returned ${response.status}`)
    }
    const data = await response.json()
    return Response.json(data.result ?? {
      projects: [], certificates: [], journey: []
    })
  } catch (error) {
    console.error('Portfolio CMS API error:', error)
    return Response.json(
      {error: 'Unable to load portfolio content'},
      {status: 502}
    )
  }
}
