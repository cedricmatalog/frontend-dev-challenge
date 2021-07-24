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
    variables: { first: 15 },
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

  if (loading) return <div className="min-h-screen flex bg-484D57"></div>;

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
