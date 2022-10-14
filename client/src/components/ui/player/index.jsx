import React from 'react';
import { DEFAULT_API_URL } from '../../../helpers/constants';
import { Div, AudioDiv, ButtonsDiv } from './styles';

import Card from 'react-bootstrap/Card';

import { BsSkipEndCircle, BsSkipStartCircle } from "react-icons/bs";

const Player = ({src, song, ChangeSongFromButtons}) => {

  return <Div>
    <Card>
      <ButtonsDiv>
        <BsSkipStartCircle onClick={() => ChangeSongFromButtons(false)}/>
          <Card.Img variant="top" height='150' width='150' src={`${DEFAULT_API_URL}${song.imgDir}`} />
        <BsSkipEndCircle onClick={() => ChangeSongFromButtons(true)}/>
      </ButtonsDiv>
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>{song.band}</Card.Text>
        <AudioDiv>
          <audio autoPlay controls src={src}></audio> 
        </AudioDiv>
      </Card.Body>
    </Card>
  </Div>;
}

export default Player;