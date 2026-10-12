export type ResearchPaper = {
  title: string
  summary: string
  category: string
  topic: string
  format: string
  url: string
}

export async function getResearchPapers(): Promise<ResearchPaper[]> {
  const response = await fetch('/api/research')

  if (!response.ok) {
    throw new Error('Research data could not be loaded')
  }

  return response.json()
}
