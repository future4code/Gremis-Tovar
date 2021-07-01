import React from "react";
import {
  ContainerMaincard,
  CardContainer,
  ImagePlanet,
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
                <ImagePlanet></ImagePlanet>
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
