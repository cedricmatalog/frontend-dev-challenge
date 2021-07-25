import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export default function PokemonList({ pokemonList, setPokemonId, pokemonId }) {
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (pokemonList) {
      setTotalPokemonCount(pokemonList.pokemons.length);
    }
  }, [pokemonList]);

  useEffect(() => {
    setPagesCount(totalPokemonCount / 5);
  }, [totalPokemonCount]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  if (pokemonList === undefined) return null;

  return (
    <div className="flex flex-col w-5/12 bg-2D2F36">
      <div className="w-full pt-24 z-0">
        {pokemonList?.pokemons
          ?.slice(currentPage * 5, currentPage * 5 + 5)
          .map(({ id, image, name, number }) => (
            <div
              key={id}
              className={`cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center ml-12 mr-10 mt-2 mb-4 p-5 bg-3F414B border-r-4 ${
                pokemonId === id ? 'border-F2C94C' : 'border-3F414B'
              } hover:border-F2C94C`}
              onClick={() => setPokemonId(id)}
            >
              <div
                className="rounded-full h-16 w-16 mr-5 bg-white bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: '45px',
                }}
              ></div>

              <span className="text-F2C94C font-bold text-lg mr-3">
                {number}
              </span>
              <span className="text-EDEDED font-bold text-lg">{name}</span>
            </div>
          ))}
      </div>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
