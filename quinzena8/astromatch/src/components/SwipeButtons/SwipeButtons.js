import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import "./SwipeButtons.css";
import styled from "styled-components";

export const SwipeButtonsMain = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-evenly;
`;

function SwipeButtons(props) {
  return (
    <SwipeButtonsMain>
      <IconButton className="swipeButtons_replay" onClick={props.clearRequests}>
        <ReplayIcon font="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_close"
        onClick={props.getProfileToChoose}
      >
        <CloseIcon font="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_favorite"
        onClick={props.choosenPerson}
      >
        <FavoriteIcon font="large" />
      </IconButton>
    </SwipeButtonsMain>
  );
}

export default SwipeButtons;
