import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_POKEMONS } from '../gql/queries';
import PokemonDetail from './PokemonDetail';
import PokemonList from './PokemonList';

export default function Pokemon() {
  const {
    loading,
    error,
    data: pokemonList,
  } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });

  const [pokemon, setPokemon] = useState();
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    if (pokemonList) {
      const { pokemons } = pokemonList;
      setPokemon(pokemons[0]);
      setPokemonId(pokemons[0].id);
    }
  }, [pokemonList]);

  useEffect(() => {
    if (pokemonList) {
      const { pokemons } = pokemonList;
      setPokemon(pokemons.find(({ id }) => pokemonId === id));
    }
  }, [pokemonId, pokemonList]);

  if (loading)
    return (
      <div className="min-h-screen flex bg-484D57 justify-center items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <div className="min-h-screen flex items-stretch justify-center bg-484D57 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex w-8/12 min-h-737 bg-white">
        <PokemonList
          pokemonList={pokemonList}
          setPokemonId={setPokemonId}
          pokemonId={pokemonId}
        />
        <PokemonDetail pokemon={pokemon} />
      </div>
    </div>
  );
}
