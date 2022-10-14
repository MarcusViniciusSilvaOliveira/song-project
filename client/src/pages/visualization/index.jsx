import React, { useEffect, useState, useMemo } from 'react';
import SongContainer from '../../components/ui/songContainer/index'
import Player from '../../components/ui/player/index'

import { GetSongs, GetSongAudio } from '../../services/songs';

import { DEFAULT_API_URL } from '../../helpers/constants';
import { DivContainer, EmptyDiv } from './styles';
import ListGroup from 'react-bootstrap/ListGroup';

const Visualization = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    GetSongs().then(res => {
      setSongs(res.data);
    })
  }, []);

  const ChangeSongFromButtons = (next) => {
    const nextIndex = next ? 1 : -1;
    const currentIndex = songs.map((song) => song.id).indexOf(selectedSong.id);
    let newIndex = 0;

    switch(currentIndex){
      case 0: 
        if(next)
          newIndex = currentIndex + nextIndex;
        else
          newIndex = songs.length - 1; break;

      case songs.length - 1: 
        if(!next)
          newIndex = currentIndex + nextIndex; 
      break;

      default: newIndex = currentIndex + nextIndex; break;
    }

    setSelectedSong(songs[newIndex]);
  }

  const SongsContainer = useMemo(() =>{

    const selectSong = (song) => {
      if(selectedSong !== song)
        setSelectedSong(song);
    }

    return <DivContainer>
      <ListGroup numbered>
        {
          songs.map((song, index) => {
            return <SongContainer setSelectedSong={selectSong} isSelectedSong={song.id === selectedSong?.id} song={song} key={index} />
          })
        }
      </ListGroup >
    </DivContainer>
  },[songs, selectedSong]);

  const PlayerContainer = () => <Player 
    src={`${DEFAULT_API_URL}/api${GetSongAudio(selectedSong.id)}`} 
    song={selectedSong}
    ChangeSongFromButtons={ChangeSongFromButtons}
  />;

  const EmptyContainer = () => <EmptyDiv>
    It seems you dont have any song to play : (
    <br /> <br /> <br />
    But you can add some new ones : )
  </EmptyDiv>;

  return <>
    {songs.length > 0 ? SongsContainer() : EmptyContainer()}
    {selectedSong ? PlayerContainer() : <></>}
  </>
}

export default Visualization;