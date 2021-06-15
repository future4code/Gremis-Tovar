import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "react-tinder-card";
import {
  CardTinder,
  CardTinderContainer,
  Card,
  DescriptionProfile,
  DescriptionProfileH3,
  DescriptionProfileP,
} from "./Styled";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Loading from "../Loading/Loading";

function TinderCards() {
  const [people, setPeople] = useState({});
  const [render, setRender] = useState(false);

  useEffect(function () {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gremis/person"
      )
      .then((res) => {
        setPeople(res.data.profile);
        setRender(true);
      })
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
      // .then((res) => console.log(res))
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
      {render === false ? (
        <CardTinder>
          <CardTinderContainer>
            <Card>
              <Loading />
            </Card>
          </CardTinderContainer>
        </CardTinder>
      ) : (
        <>
          <CardTinder>
            <CardTinderContainer onClick={getProfileToChoose}>
              <PeopleCard
                className="swipe"
                key={people.id}
                preventSwipe={["up", "down"]}
              >
                <Card>
                  <DescriptionProfile>
                    <h2>Nome: {people.name}</h2>
                    <DescriptionProfileH3>
                      Idade: {people.age}
                    </DescriptionProfileH3>
                    <DescriptionProfileP>
                      Biografia: {people.bio}
                    </DescriptionProfileP>
                  </DescriptionProfile>
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
      )}
    </>
  );
}

export default TinderCards;
