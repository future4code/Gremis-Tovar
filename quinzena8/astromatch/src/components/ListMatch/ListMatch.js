import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { ListMatchDetails } from "./Styled";

function ListMatch() {
  const [peopleMatch, setPeopleMatch] = useState([]);

  useEffect(function () {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/matches"
      )
      .then((res) => setPeopleMatch(res.data.matches))
      .catch((err) => console.log(err));
  };
  return (
    <ListMatchDetails>
      {peopleMatch.map((profile) => (
        <div className="list_match_details">
          <Avatar
            className="list_match_image"
            alt={profile.name}
            src={profile.photo}
          />
          <div className="details_profile">
            <h2>{profile.name}</h2>
          </div>
        </div>
      ))}
    </ListMatchDetails>
  );
}
export default ListMatch;
