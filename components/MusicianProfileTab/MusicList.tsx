import * as React from "react";
import styled from "styled-components";
import MusicianStyle from "./MusicianStyle";
import WorkingStep from "./WorkingStep";

interface Props {
  musicList: { title: string; album: string; isPlaying: boolean }[];
}
const Container = styled.ul`
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Card = styled.li`
  display: flex;
  background: #181818;
  border-radius: 8px;
  align-items: center;
  margin-top: 1rem;
`;
const AlbumCover = styled.div`
background-image: url("${({ src }: { src: string }) => src}");
margin: 0.5rem;
width: 3rem;
height: 3rem;
margin-left: 1rem;
`;

const Title = styled.div`
  font-size: 0.875rem;
  color: #e2e1e2;
  padding-left: 0.5rem;
`;
const TITLE = styled.div`
  color: #6865fc;
  border-radius: 2px;
  font-size: 0.5rem;
  padding: 0.25rem 0.4rem;
  background: none;
  border: 1px solid #6865fc;
`;
const MusicList = ({ musicList }: Props) => {
  return (
    <Container>
      {musicList.map((music, index) => (
        <Card>
          <AlbumCover src={music.album}></AlbumCover>
          {index == 0 && <TITLE>TITLE</TITLE>}
          <Title>{music.title}</Title>
        </Card>
      ))}
    </Container>
  );
};

export default MusicList;