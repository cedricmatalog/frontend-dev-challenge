export default function PokemonList({ pokemonList, setPokemonId, pokemonId }) {
  return (
    <div className="flex flex-col w-5/12 bg-2D2F36">
      <div className="w-full pt-24 z-0">
        {pokemonList?.pokemons?.map(({ id, image, name, number }) => (
          <div
            key={id}
            className={`flex items-center ml-12 mr-10 mt-2 mb-4 p-5 bg-3F414B border ${
              pokemonId === id ? 'border-F2C94C' : 'border-3F414B'
            } hover:border-F2C94C`}
            onClick={() => setPokemonId(id)}
          >
            <img
              className="rounded-full h-16 w-16 mr-5"
              src={image}
              alt={name}
            />
            <span className="text-F2C94C font-bold text-lg mr-3">{number}</span>
            <span className="text-EDEDED font-bold text-lg">{name}</span>
          </div>
        ))}
      </div>

      <div className="flex-grow">
        <div className="h-3/6"></div>
        <div className="h-3/6 bg-1F1F1F">Pagination</div>
      </div>
    </div>
  );
}
