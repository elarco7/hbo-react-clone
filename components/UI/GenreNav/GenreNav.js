import Link from "next/link";
import React, { useState } from "react";
import { useStateContext } from "../../HBOProvider";

export const GenreNav = (props) => {
  const state = useStateContext();
  const [activeNav, setActiveNav] = useState(false);
  console.log(props.genresData, "GENRES DATA in GENRENAV");
  setTimeout(() => {
    setActiveNav(true);
  }, 100);

  const GenresList = (props) => {
    return props.genresData.map((genreData, index) => {
      return (
        <li key={genreData.id}>
          <Link href={`/${props.mediaType}/${genreData.name.toLowerCase()}`}>
            {genreData.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <ul className={`genre-nav ${activeNav && "genre-nav--active"}`}>
      <GenresList
        genresData={props.genresData}
        mediaType={props.mediaType}
      ></GenresList>
    </ul>
  );
};
