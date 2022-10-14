import React from 'react';

import { CardContainer, Div } from './styles';

const SongContainer = (props) => {
    return (
        <Div isSelectedSong={props.isSelectedSong}>
            <CardContainer className='CardContainer' onClick={() => props.setSelectedSong(props.song)}>
                <strong>{props.song.name}</strong> - {props.song.band}
            </CardContainer>
        </Div>
    );
}

export default SongContainer;