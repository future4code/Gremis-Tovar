import React from "react";
import earth from "../../images/earth.png";
import jupiter from "../../images/jupiter.png";
import mars from "../../images/mars.png";
import Mercúrio from "../../images/mercury.png";
import neptune from "../../images/neptune.png";
import pluto from "../../images/pluto.png";
import saturn from "../../images/saturn.png";
import uranus from "../../images/uranus.png";
import venus from "../../images/venus.png";

import {
  ContainerMaincard,
  CardContainer,
  ImagePlanet,
  ImagePlanetImg,
  DescriptionTrip,
  DescriptionTripH1,
  DescriptionTripH2,
} from "./Styled";

const CardListTrip = (props) => {
  const tripsList = props.tripsData;

  return (
    <ContainerMaincard>
      {tripsList.trips &&
        tripsList.trips.map((trip) => {
          return (
            <>
              <CardContainer>
                <ImagePlanet>
                  {(() => {
                    switch (trip.planet) {
                      case "Mercúrio":
                        return <ImagePlanetImg src={Mercúrio} alt="Mercúrio" />;
                      case "Vênus":
                        return <ImagePlanetImg src={venus} alt="Vênus" />;
                      case "Terra":
                        return <ImagePlanetImg src={earth} alt="Terra" />;
                      case "Marte":
                        return <ImagePlanetImg src={mars} alt="Marte" />;
                      case "Jupiter":
                        return <ImagePlanetImg src={jupiter} alt="Jupiter" />;
                      case "Saturno":
                        return <ImagePlanetImg src={saturn} alt="Saturno" />;
                      case "Urano":
                        return <ImagePlanetImg src={uranus} alt="Urano" />;
                      case "Netuno":
                        return <ImagePlanetImg src={neptune} alt="Netuno" />;
                      default:
                        return <ImagePlanetImg src={pluto} alt="Plutão" />;
                    }
                  })()}
                </ImagePlanet>
                <DescriptionTrip key={trip.id}>
                  <DescriptionTripH1>
                    <b>{trip.name}</b>
                  </DescriptionTripH1>
                  <DescriptionTripH2>
                    <b>{trip.planet}</b>
                  </DescriptionTripH2>
                  <p>
                    <b>{trip.description}</b>
                  </p>
                  <p>
                    <p>Data: {trip.date}</p>
                  </p>
                  <p>
                    <p>Duração: {trip.durationInDays} dias</p>
                  </p>
                </DescriptionTrip>
              </CardContainer>
              ;{" "}
            </>
          );
        })}
    </ContainerMaincard>
  );
};

export default CardListTrip;
