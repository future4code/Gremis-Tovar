import React from "react";
import {
  CardContainer,
  ContainerDetails,
  ContainerImage,
  IconDelete,
  NameTrip,
  DescriptionTrip,
  SeeDetails,
} from "./Styled";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage } from "../../routes/coordinator";
import { deleteTrip } from "../../services/request";
import icon from "../../images/deleteicon.jpg";

const AdminTripCard = (props) => {
  const tripsList = props.tripsData;
  const history = useHistory();

  const onClickDelete = (id) => {
    if (window.confirm(`Tem certeza que deseja deletar esta viagem?`)) {
      deleteTrip(id, props.getTrips);
    }
  };

  return (
    <CardContainer>
      {tripsList.trips &&
        tripsList.trips.map((trip) => {
          return (
            <>
              <ContainerDetails>
                <NameTrip>{trip.name}</NameTrip>
                <DescriptionTrip>{trip.description}</DescriptionTrip>
                <SeeDetails
                  onClick={() => goToTripDetailsPage(history, trip.id)}
                >
                  VER DETALHES
                </SeeDetails>
                <ContainerImage onClick={() => onClickDelete(trip.id)}>
                  {" "}
                  <IconDelete src={icon} alt="Apagar Viagem" />
                </ContainerImage>
              </ContainerDetails>
            </>
          );
        })}
    </CardContainer>
  );
};

export default AdminTripCard;
