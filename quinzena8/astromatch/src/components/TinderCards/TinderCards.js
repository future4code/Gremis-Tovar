import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "react-tinder-card";
import {
  CardTinder,
  CardTinderContainer,
  Card,
  CardTitle,
} from "./Styled";
import SwipeButtons from "../SwipeButtons/SwipeButtons";

function TinderCards() {
  const [people, setPeople] = useState({});
  // const [render, setRender] = useState(false);

  useEffect(function () {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/person"
      )
      .then((res) => setPeople(res.data.profile))
      .catch((err) => console.log(err));
  };

  const choosenPerson = () => {
    const body = {
      id: people.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/choose-person",
        body
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getProfileToChoose();
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/clear"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getProfileToChoose();
  };

  return (
    <>
      <CardTinder>
        <CardTinderContainer onClick={getProfileToChoose}>
          <PeopleCard
            className="swipe"
            key={people.id}
            preventSwipe={["up", "down"]}
          >
            <Card>
              <h1>{people.name}</h1>
              <CardTitle>{people.bio}</CardTitle>
              <img src={people.photo} alt={people.name} />
            </Card>
          </PeopleCard>
        </CardTinderContainer>
      </CardTinder>
      <SwipeButtons
        choosenPerson={choosenPerson}
        getProfileToChoose={getProfileToChoose}
        clearRequests={clear}
      />
    </>
  );
}

export default TinderCards;
