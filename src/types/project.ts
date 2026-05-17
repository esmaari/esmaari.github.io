export type ArchitectureDecision = {
  title: string
  decision: string
  why: string
  impact: string
}

export type ProjectFeature = {
  title: string
  description: string
  image: string
  bullets?: string[]
}

export type PriorIteration = {
  framework: string
  summary: string
  whyVueFirst: string
  whyReactSecond: string
  highlights: string[]
  liveUrl?: string
  github?: string
}

export type ProjectMetaInfo = {
  role: string
  timeline: string
  stack: string
  focus: string
  projectType: string
}

export type ProjectResults = {
  technical: string[]
  product: string[]
}

export type Project = {
  slug: string
  title: string
  impact: string
  overview: string
  technical: string
  strategy?: string
  metaInfo?: ProjectMetaInfo
  architectureDecisions?: ArchitectureDecision[]
  heroImage: string
  features?: ProjectFeature[]
  design?: {
    description: string
    images: string[]
  }
  priorIteration?: PriorIteration
  technicalChallenges?: string[]
  results?: ProjectResults
  improvements?: string[]
  technologies: string[]
  route: string
  liveUrl?: string
  github?: string
}
