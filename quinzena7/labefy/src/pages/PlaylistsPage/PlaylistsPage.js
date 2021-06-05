import React, { Component } from "react";
import play from "../../images/play.png";
import playlistdefault from "../../playlistdefault.json";
import {
  PageInner,
  CardsWrap,
  CardsWrapTitle,
  CardsWrapInner,
  CardsWrapCard,
  CardImage,
  ImageCard,
  CardContent,
  CardContentTitle,
  CardplayIcon,
  PlayIconImage,
} from "./Styled";

export class PlaylistPage extends Component {
  constructor() {
    super();
    this.state = {
      sugestions: playlistdefault.sugestions,
    };
  }

  render() {
    return (
      <PageInner>
        {this.state.sugestions.map((sugestion) => (
          <CardsWrap key={sugestion.id}>
            <CardsWrapTitle>{sugestion.name}</CardsWrapTitle>
            <CardsWrapInner>
              {sugestion.playlists.map((playlist) => (
                <CardsWrapCard key={playlist.id}>
                  <CardImage>
                    <ImageCard src={playlist.image} alt="Pic 1"></ImageCard>
                  </CardImage>
                  <CardContent>
                    <CardContentTitle>{playlist.name}</CardContentTitle>
                  </CardContent>
                  <CardplayIcon
                    onClick={() =>
                      this.props.changePage({
                        page: "playlistDetails",
                        playlist: playlist,
                      })
                    }
                  >
                    <PlayIconImage src={play} alt="play"></PlayIconImage>
                  </CardplayIcon>
                </CardsWrapCard>
              ))}
            </CardsWrapInner>
          </CardsWrap>
        ))}
      </PageInner>
    );
  }
}

export default PlaylistPage;
