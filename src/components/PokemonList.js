import { useEffect, useState } from 'react';

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

  function renderPagination() {
    return (
      <div className="flex-grow">
        <div className="h-3/6"></div>
        <div className="flex justify-between h-3/6 bg-1F1F1F">
          <div className="flex items-center just pl-4">
            {[...Array(pagesCount)].map((e, i) => (
              <button
                className={`bg-2D2F36 p-1 px-3 m-1 rounded text-white border-b-2 ${
                  i === currentPage ? 'border-F2C94C' : 'border-3F414B'
                }`}
                key={i}
                onClick={() => {
                  setCurrentPage(i);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center just pr-4">
            <button
              className="bg-2D2F36 p-1 px-3 m-1 rounded text-white"
              style={{
                cursor: currentPage === 0 ? 'not-allowed' : 'default',
              }}
              onClick={() => {
                if (currentPage !== 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Prev
            </button>
            <button
              className="bg-2D2F36 p-1 px-3 m-1 rounded text-white"
              style={{
                cursor:
                  currentPage === pagesCount - 1 ? 'not-allowed' : 'default',
              }}
              onClick={() => {
                if (currentPage !== pagesCount - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-5/12 bg-2D2F36">
      <div className="w-full pt-24 z-0">
        {pokemonList?.pokemons
          ?.slice(currentPage * 5, currentPage * 5 + 5)
          .map(({ id, image, name, number }) => (
            <div
              key={id}
              className={`flex items-center ml-12 mr-10 mt-2 mb-4 p-5 bg-3F414B border-r-4 ${
                pokemonId === id ? 'border-F2C94C' : 'border-3F414B'
              } hover:border-F2C94C`}
              onClick={() => setPokemonId(id)}
            >
              <div
                className="rounded-full h-16 w-16 mr-5 bg-white bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: '45px'
                }}
              ></div>

              {/* <img
                className="rounded-full h-16 w-16 mr-5"
                src={image}
                alt={name}
              /> */}
              <span className="text-F2C94C font-bold text-lg mr-3">
                {number}
              </span>
              <span className="text-EDEDED font-bold text-lg">{name}</span>
            </div>
          ))}
      </div>
      {renderPagination()}
    </div>
  );
}
