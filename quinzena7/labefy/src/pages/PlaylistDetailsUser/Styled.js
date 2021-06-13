import styled from "styled-components";

export const PlaylistPage = styled.div`
background-color: rgb(214, 214, 214);
`;

export const MainInner = styled.div`
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

export const PlaylistPageInfo = styled.div`
text-align: center;
padding: 1.5rem 0;
display: flex;
`;

export const PlaylistPageImage = styled.div`
width: 250px;
height: 250px;
`;

export const PlaylistImage = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
-web-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const PlaylistPageContent = styled.div`
text-align: left;
padding: 1.5rem 2rem;
`;

export const PlaylistPageContentTitle = styled.h1`
font-size: 7rem;
margin: 0;
line-height: 1;
`;

export const PlaylistPageSongs = styled.div`
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

export const IconsHeart = styled.div`
width: 62px;
height: 62px;
margin-left: 7%;
`;

export const IconsHeartImage = styled.img`
margin-left: -4vw;
margin-top: 2vh;
width: 100%;
cursor: pointer;
`;

export const SongList = styled.ul`
padding: 0;
`;

export const SongListLi = styled.li`
list-style: none;
width: 100%;
padding: 2rem;
display: flex;
align-items: center;
transition: background 0.2s ease-in-out;
:hover {
  background: rgba(255, 255, 255, 0.1);
}
`;

export const SongIcon = styled.div`
padding-right: 1rem;
`;

export const SongDetailsTitle = styled.h3`
margin: 0;
font-weight: 300;
font-size: 1rem;
`;

export const SongDetailsSpan = styled.span`
color: rgba(255, 255, 255, 0.7);
font-size: 0.9rem;
`;

export const DeleteIconImage = styled.img`
width: 3%;
margin-left: auto;
cursor: pointer;
`;
