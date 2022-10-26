import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
    const { error, data, loading } = useQuery(GET_CHARACTERS); //gonna return obje.error , obj.loading, obj.data
    
    return {
        error,
        data,
        loading: loading
    }
};
