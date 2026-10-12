export type CmsProject = {
  _id: string
  title: string
  description?: string
  category?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export type CmsCertificate = {
  _id: string
  title: string
  issuer?: string
  date?: string
  category?: string
  description?: string
  credentialUrl?: string
  imageUrl?: string
  pdfUrl?: string
}

export type CmsJourney = {
  _id: string
  title: string
  organization?: string
  category?: string
  startDate?: string
  endDate?: string
  current?: boolean
  description?: string
  link?: string
  imageUrl?: string
}

type PortfolioContent = {
  projects: CmsProject[]
  certificates: CmsCertificate[]
  journey: CmsJourney[]
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const response = await fetch('/api/portfolio', {cache: 'no-store'})
  if (!response.ok) {
    throw new Error('Could not load portfolio content')
  }
  return response.json()
}
