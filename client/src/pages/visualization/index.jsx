import React, { useEffect, useState, useMemo } from 'react';
import SongContainer from '../../components/ui/songContainer/index'
import Player from '../../components/ui/player/index'

import { GetSongs, GetSongAudio } from '../../services/songs';

import { DEFAULT_API_URL } from '../../helpers/constants';
import { DivContainer } from './styles';
import ListGroup from 'react-bootstrap/ListGroup';

const Visualization = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    GetSongs().then(res => {
      setSongs(res.data);
    })
  }, []);

  const selectSong = (song) => {
    if(selectedSong != song)
      setSelectedSong(song);
  }

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

  const SongsContainer = useMemo(() =>
    <DivContainer>
      <ListGroup numbered>
        {
          songs.map((song, index) => {
            return <SongContainer setSelectedSong={selectSong} isSelectedSong={song.id == selectedSong?.id} song={song} key={index} />
          })
        }
      </ListGroup >
    </DivContainer>
    , [songs, selectedSong]);

  const PlayerContainer = () => <Player 
    src={`${DEFAULT_API_URL}/api${GetSongAudio(selectedSong.id)}`} 
    song={selectedSong}
    ChangeSongFromButtons={ChangeSongFromButtons}
  />;

  return <>
    {SongsContainer}
    {selectedSong ? PlayerContainer() : <></>}
  </>
}

export default Visualization;