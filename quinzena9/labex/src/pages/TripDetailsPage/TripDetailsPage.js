import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToAdminHomePage } from "../../routes/coordinator";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import {
  TripContainer,
  TripContainerMain,
  DescriptionTripDetails,
  CandidatesContainer,
  CandidatesPending,
  CandidatesAproved,
  ButtonController,
  ContainerButtons,
} from "./Styled";

const TripDetailsPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { id } = useParams();
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`);

  const candidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.candidates.map((perfil) => {
      return (
        <CandidateCard
          key={perfil.id}
          candidate={perfil}
          tripId={id}
          getTripDetails={getTripDetails}
        />
      );
    });

  const approvedCandidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.approved.map((perfil) => {
      return <li key={perfil.id}>{perfil.name}</li>;
    });

  return (
    <>
      <TripContainerMain>
        <TripContainer>
          {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
          {tripDetails && tripDetails.trip && (
            <>
              <DescriptionTripDetails>
                {tripDetails.trip.description}
              </DescriptionTripDetails>
              <p>
                <b>Planeta:</b> {tripDetails.trip.planet}
              </p>
              <p>
                <b>Data:</b> {tripDetails.trip.date}
              </p>
              <p>
                <b>Duração:</b> {tripDetails.trip.durationInDays}
              </p>
            </>
          )}
        </TripContainer>

        <CandidatesContainer>
          <CandidatesPending>
            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? (
              candidates
            ) : (
              <p>Não há candidatos pendentes</p>
            )}
          </CandidatesPending>
          <CandidatesAproved>
            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? (
              approvedCandidates
            ) : (
              <p>Não há candidatos aprovados</p>
            )}
          </CandidatesAproved>
        </CandidatesContainer>
      </TripContainerMain>
      <ContainerButtons>
        <ButtonController onClick={() => goToAdminHomePage(history)}>
          Voltar
        </ButtonController>
      </ContainerButtons>
    </>
  );
};

export default TripDetailsPage;
