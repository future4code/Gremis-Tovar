import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

function SwipeButtons(props) {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_replay" onClick={props.clearRequests}>
        <ReplayIcon font="large" />
      </IconButton>
      <IconButton className="swipeButtons_close" onClick={props.getProfileToChoose}>
        <CloseIcon
          font="large"
          alt="Reiniciar Astromatch"
        />
      </IconButton>
      <IconButton className="swipeButtons_favorite" onClick={props.choosenPerson}>
        <FavoriteIcon
          font="large"
        />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
