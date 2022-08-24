import React, { useEffect, useState } from "react";
import Image from 'next/image'
//import 

const SearchResult: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [pokeList, setPokeList] = useState();

  useEffect(() => {
    fetchList("https://pokeapi.co/api/v2/pokemon");
  }, []);

  const fetchList = async (url: string) => {
    const request = await fetch(url);
    const json = await request.json();
    setPokeList(json.results);
    setOffset(offset + 20)
  }
  //fetch fun

  interface PokemonProps {
    pokemon: string;
    pokeUrl : string;
  }

  const Pokemon = (props: PokemonProps) => {
    return (
      <div>
        <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokeUrl.slice(34, 1) + ".png"} alt={""}></Image>
        {props.pokeUrl.slice(34, 1)}: {props.pokemon.charAt(0).toUpperCase() + props.pokemon.slice(1)}
    </div>
    )
  }

  const MapList = (pokeList : any) => {
      const mapList = Object.keys(pokeList).map((i, keyName) => 
      <Pokemon key={i} pokemon={pokeList[keyName].name} pokeUrl={pokeList[keyName].url} />
      );

      return <div>{mapList}</div>
  }


  //render each element fun

  return (
    <div>
      <MapList />
      <button onClick={() => {
        fetchList("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20")
      }}> 
        Down
      </button>
    </div>
  );
}

export default SearchResult;