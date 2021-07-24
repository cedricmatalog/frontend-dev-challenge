import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      types
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemons($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;
