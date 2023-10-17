import { getPokemon } from '@/lib/pokemonAPI';
import Image from 'next/image';
import { PokemonImage } from '@/components/pokemon-image';
// localhost:3000/pikachu

// pokemonName

// pokemonName = "Pikachu" -> show the Pikachu page

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  //Object Destructuring
  const { pokemonName } = params;
  // pikachu
  // get the API data for pikachu
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{pokemonName}</h1>
      <PokemonImage
        image={pokemonObject.sprites.other['official-artwork'].front_default}
        name={pokemonName}
      />
    </>
  );
}
