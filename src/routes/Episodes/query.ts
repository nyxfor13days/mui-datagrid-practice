import { gql } from "@apollo/client";

export const episodesQuery = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

export const getAllCharacters = gql`
  query getAllCharacters {
    characters {
      results {
        name
      }
    }
  }
`;
