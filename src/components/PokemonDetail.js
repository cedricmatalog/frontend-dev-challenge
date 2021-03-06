import { COLORS } from '../constants';

export default function PokemonDetail({ pokemon }) {
  const {
    image,
    name,
    number,
    types,
    weaknesses,
    weight,
    height,
    classification,
  } = pokemon ?? {};

  return (
    <div className="w-9/12 bg-3B3E46">
      <div className="flex items-center justify-between h-1/6 border-b-2 border-2D2F36">
        <span className="text-EDEDED font-semibold text-4xl ml-7">{name}</span>

        <span className="text-F2C94C font-semibold text-4xl mr-7">
          #{number}
        </span>
      </div>

      <div className="flex flex-col w-full h-5/6">
        <div className="flex justify-center z-10 mt-8">
          <div
            className="rounded-full h-44 w-44 bg-white bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: '100px',
              boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
            }}
          ></div>
        </div>

        <div
          className="flex h-full bg-white m-10 -mt-14 mb-16 rounded-lg px-10 py-16 pt-20"
          style={{
            boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.75)',
          }}
        >
          <div className="w-2/4">
            <p className="text-black font-semibold text-2xl mb-6">
              Classification
            </p>

            <span className="mr-2">{classification}</span>

            <p className="text-black font-semibold text-2xl mt-6 mb-6">
              Height
            </p>

            {height && (
              <span className="mr-2">
                {height.minimum} - {height.maximum}
              </span>
            )}

            <p className="text-black font-semibold text-2xl mt-6 mb-6">
              Weight
            </p>

            {weight && (
              <span className="mr-2">
                {weight.minimum} - {weight.maximum}
              </span>
            )}
          </div>
          <div className="w-2/4 border-l-2 border-F2C94C -ml-1 pl-3">
            <p className="text-black font-semibold text-2xl mb-6">Type</p>

            {types &&
              types.map((type) => (
                <span key={type} className={`bg-${COLORS[type]}-100 p-2 mr-2`}>
                  {type}
                </span>
              ))}

            <p className="text-black font-semibold text-2xl mt-6 mb-6">
              Weaknesses
            </p>
            {weaknesses &&
              weaknesses.map((weakness) => (
                <span
                  key={weakness}
                  className={`bg-${COLORS[weakness]}-100 p-2 mr-2`}
                >
                  {weakness}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
