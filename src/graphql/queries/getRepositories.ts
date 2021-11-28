import { gql } from '@apollo/client'

export const getRepositories = gql`
  {
    user(login: "vitorserrano") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            stargazerCount
            forkCount
            description
            updatedAt
            url
            languages(first: 6) {
              nodes {
                ... on Language {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`
