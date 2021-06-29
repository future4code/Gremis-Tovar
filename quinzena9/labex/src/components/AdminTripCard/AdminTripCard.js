import React from "react";
import { CardContainer, ContainerDetails, SeeDetails } from "./Styled";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage } from "../../routes/coordinator";
import icon from "../../images/deleteicon.png";

const AdminTripCard = (props) => {
  const tripsList = props.tripsData;
  const history = useHistory();

  return (
    <CardContainer>
      {tripsList.trips &&
        tripsList.trips.map((trip) => {
          return (
            <>
              <ContainerDetails>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <SeeDetails onClick={() => goToTripDetailsPage(history)}>VER DETALHES</SeeDetails>
                <img src={icon} src="Apagar Viagem" />
              </ContainerDetails>
            </>
          );
        })}
    </CardContainer>
  );
};

export default AdminTripCard;
