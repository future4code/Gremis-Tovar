import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { ListMatchDetails, DetailsProfile } from "./Styled";

function ListMatch() {
  const [peopleMatch, setPeopleMatch] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(function () {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/matches"
      )
      .then((res) => {
        setPeopleMatch(res.data.matches);
        setRender(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {render === false ? (
        <ListMatchDetails>
          <h1>Ainda não tem match!</h1>
        </ListMatchDetails>
      ) : (
        <ListMatchDetails>
          {peopleMatch.map((profile) => (
            <div className="list_match_details">
              <Avatar
                className="list_match_image"
                alt={profile.name}
                src={profile.photo}
              />
              <DetailsProfile>
                <h2>{profile.name}</h2>
              </DetailsProfile>
            </div>
          ))}
        </ListMatchDetails>
      )}
    </>
  );
}
export default ListMatch;
