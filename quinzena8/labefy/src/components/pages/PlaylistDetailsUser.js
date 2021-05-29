import React, { Component } from "react";
import play from "../../images/play.png";
import heart from "../../images/heart-white.png";
import music from "../../images/music.png";
import styled from "styled-components";

const PlaylistPage = styled.div`
  background-color: rgb(214, 214, 214);
`;

const MainInner = styled.div`
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0.5)),
    color-stop(40%, #121212)
  );
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 40%);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const PlaylistPageInfo = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
`;

const PlaylistPageImage = styled.div`
  width: 250px;
  height: 250px;
`;

const PlaylistImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -web-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

const PlaylistPageContent = styled.div`
  text-align: left;
  padding: 1.5rem 2rem;
`;

const PlaylistPageContentTitle = styled.h1`
  font-size: 7rem;
  margin: 0;
  line-height: 1;
`;

const SmallText = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const PlaylistPageDesc = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.8px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const TagLine = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const PlaylistPageDescP = styled.p`
  margin: 0;
`;

const PlaylistPageDescSpan = styled.p`
  opacity: 0.7;
  position: relative;
  padding-left: 20px;
  :before {
    content: "";
    width: 4px;
    height: 4px;
    background: white;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    margin-left: -10px;
    top: 9px;
  }
`;

const PlaylistPageSongs = styled.div`
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0.5)),
    color-stop(40%, #121212)
  );
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 40%);
  height: 100%;
`;

const PlaylistButtons = styled.div`
  display: flex;
  align-items: center;
`;

const PlayIcon = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  position: absolute;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const PlayIconImages = styled.img`
  width: 100%;
  margin-left: 0;
  right: 0;
  bottom: 0;
`;

const IconIcons = styled.div`
  margin-left: 0.5rem;
`;

const IconsHeart = styled.div`
  width: 62px;
  height: 62px;
  margin-left: 7%;
`;

const IconsHeartImage = styled.img`
  margin-left: 5vw;
  width: 100%;
  cursor: pointer;
`;

const SongList = styled.ul`
  padding: 0;
`;

const SongListLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SongIcon = styled.div`
  padding-right: 1rem;
`;

const SongIconImage = styled.img`
  fill: rgba(255, 255, 255, 0.7);
  width: 15px;
  height: 15px;
`;

const SongDetailsTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1rem;
`;

const SongDetailsSpan = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const SongTime = styled.div`
  margin-left: auto;
`;

export class PlaylistDetails extends Component {
  render() {
    return (
      <PlaylistPage>
        <MainInner>
          <PlaylistPageInfo>
            <PlaylistPageImage>
              <PlaylistImage
                src="https://picsum.photos/200/150"
                alt="pic"
              ></PlaylistImage>
            </PlaylistPageImage>
            <PlaylistPageContent>
              <SmallText>PLAYLIST</SmallText>
              <PlaylistPageContentTitle>Es la del Usuario</PlaylistPageContentTitle>

              <TagLine>
                Minimalista, eletrônico e moderno clássico para se concentrar
              </TagLine>
              <PlaylistPageDesc>
                <PlaylistPageDescP>Labefy</PlaylistPageDescP>
                <PlaylistPageDescSpan>699,428 likes</PlaylistPageDescSpan>
                <PlaylistPageDescSpan>4 horas 35 min</PlaylistPageDescSpan>
              </PlaylistPageDesc>
            </PlaylistPageContent>
          </PlaylistPageInfo>

          <PlaylistPageSongs>
            <PlaylistButtons>
              <PlayIcon>
                <PlayIconImages src={play} alt="play"></PlayIconImages>
              </PlayIcon>{" "}
              <IconIcons>
                <IconsHeart>
                  <IconsHeartImage src={heart} alt="play"></IconsHeartImage>
                </IconsHeart>
              </IconIcons>
            </PlaylistButtons>
            <SongList>
              <SongListLi>
                <SongIcon>
                  <SongIconImage src={music} alt="play"></SongIconImage>
                </SongIcon>
                <div>
                  <SongDetailsTitle>Hold Down</SongDetailsTitle>
                  <SongDetailsSpan>Laura Marling</SongDetailsSpan>
                </div>
                <SongTime>
                  <span>4:07</span>
                </SongTime>
              </SongListLi>

              <SongListLi>
                <SongIcon>
                  <SongIconImage src={music} alt="play"></SongIconImage>
                </SongIcon>
                <div>
                  <SongDetailsTitle>Hold Down</SongDetailsTitle>
                  <SongDetailsSpan>Laura Marling</SongDetailsSpan>
                </div>
                <SongTime>
                  <span>4:07</span>
                </SongTime>
              </SongListLi>

              <SongListLi>
                <SongIcon>
                  <SongIconImage src={music} alt="play"></SongIconImage>
                </SongIcon>
                <div>
                  <SongDetailsTitle>Hold Down</SongDetailsTitle>
                  <SongDetailsSpan>Laura Marling</SongDetailsSpan>
                </div>
                <SongTime>
                  <span>4:07</span>
                </SongTime>
              </SongListLi>

              <SongListLi>
                <SongIcon>
                  <SongIconImage src={music} alt="play"></SongIconImage>
                </SongIcon>
                <div>
                  <SongDetailsTitle>Hold Down</SongDetailsTitle>
                  <SongDetailsSpan>Laura Marling</SongDetailsSpan>
                </div>
                <SongTime>
                  <span>4:07</span>
                </SongTime>
              </SongListLi>
            </SongList>
          </PlaylistPageSongs>
        </MainInner>
      </PlaylistPage>
    );
  }
}
export default PlaylistDetails;
