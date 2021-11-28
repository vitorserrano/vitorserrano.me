type Languages = {
  name: string
  color: string
}

export type Repository = {
  id: string
  name: string
  stargazerCount: number
  forkCount: number
  description: string
  updatedAt: string | Date
  url: string
  languages: {
    nodes: Languages[]
  }
}

export type Repositories = {
  data: {
    user: {
      pinnedItems: {
        nodes: Repository[]
      }
    }
  }
}
