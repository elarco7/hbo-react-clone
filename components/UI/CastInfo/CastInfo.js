import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { CastModel } from "../../Models/CastModel";
import { CrewModel } from "../../Models/CrewModel";

export const CastInfo = (props) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    axios
      .get(props.db.url)
      .then(function (response) {
        // handle success
        console.log(response, "Response in CastInfo.js Page");
        let movieCast = response.data.cast.map((cast) => {
          return new CastModel(cast);
        });
        setCast(movieCast);
        let movieCrew = response.data.crew.map((crew) => {
          return new CrewModel(crew);
        });
        setCrew(movieCrew);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "Error in Id.js");
      })
      .finally(function () {
        // always executed
      });
  }, [props.db.url]);

  const CastComp = () => {
    return cast.map((c, index) => {
      return (
        <ul className="cast-info__crew" key={index}>
          <li>{c.name}</li>
          <li>{c.character}</li>
        </ul>
      );
    });
  };

  const CrewComp = () => {
    return crew.map((c, index) => {
      return (
        <ul className="cast-info__crew" key={index}>
          <li>{c.name}</li>
          <li>{c.job}</li>
        </ul>
      );
    });
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{cast !== null && <CastComp />}</div>
      <div className="cast-info__group-title">Directors & Crew</div>
      <div className="cast-info__list">{crew !== null && <CrewComp />}</div>
    </div>
  );
};
