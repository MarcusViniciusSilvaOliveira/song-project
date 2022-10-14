import React, {useRef, useState, useContext} from 'react';

import InputForm from '../../components/forms/input/index';
import Button from 'react-bootstrap/Button';

import { FormStyled } from './styles';

import { SaveNewSong } from '../../services/songs';

import { Context } from '../../context/store/index';
import actionsApi from '../../context/actions/api'
import actionsToast from '../../context/actions/toast'

function Registration() {

  const REQUIRED_FIELD = 'This field is required';
  const { dispatch } = useContext(Context);

  const [errors, setErrors] = useState({
    songName: '',
    bandName: '',
    audioFile: '',
    imgFile: '',
  });

  const inputSongName = useRef(null);
  const bandSongName = useRef(null);
  const inputAudioFile = useRef(null);
  const inputImgFile = useRef(null);

  const validateForm = (callback) => {
    const errorsOnNameFiled = inputSongName.current.value === '';
    const errorsOnBandFiled = bandSongName.current.value === '';
    const errorsOnAudioFiled = inputAudioFile.current.value === '';
    const errorsOnImageFiled = inputImgFile.current.value === '';

    setErrors({ 
      songName: errorsOnNameFiled ? REQUIRED_FIELD : '',
      bandName: errorsOnBandFiled ? REQUIRED_FIELD : '',
      audioFile: errorsOnAudioFiled ? REQUIRED_FIELD : '',
      imgFile: errorsOnImageFiled ? REQUIRED_FIELD : ''
    });

    if(!errorsOnNameFiled && !errorsOnBandFiled)
      callback();
  }

  const generateSongToSubmit = (data) => {
    const newSong = {
      song: {},
      audio: null,
      img: null,
      audioDir: '',
      imgDir: ''
    };
    for (const pair of data.entries()) {
      if(pair[0] !== 'audio' && pair[0] !== 'img')
        newSong.song[pair[0]] = pair[1];
      else
        newSong[pair[0]] = pair[1];
    }
    return newSong;
  }

  const submitForm = (e) => {
    e.preventDefault();
    validateForm(() => {
      dispatch({type : actionsApi.PEDDING})
      const data = new FormData(e.target);   
      SaveNewSong(generateSongToSubmit(data)).then((res) =>{
        dispatch({type : actionsApi.COMPLETED})
        dispatch({type : actionsToast.SHOW_SUCCESS_MESSAGE, payload: 'Song saved successfully.'})
        e.target.reset();
      }).catch((err) => {
        dispatch({type : actionsApi.COMPLETED})
        dispatch({type : actionsToast.SHOW_ERROR_MESSAGE, payload: 'Failed to save new song.'})
      })
    })
  }
  return (
    <FormStyled onSubmit={(e) => submitForm(e)}>
      <InputForm 
        nameField="Song name*"
        id="SongName"
        name="name"
        inputRef={inputSongName}
        erros={errors.songName}
      />
      <InputForm 
        nameField="Band or Autor name*"
        id="AutorSong"
        name="band"
        inputRef={bandSongName}
        erros={errors.bandName}
      />
      <InputForm 
        nameField="Audio*"
        id="AudioSong"
        name="audio"
        type="file"
        accept='audio/*'
        inputRef={inputAudioFile}
        erros={errors.audioFile}
      />
      <InputForm 
        nameField="Picture*"
        id="PictureSong"
        name="img"
        type="file"
        accept='image/*'
        inputRef={inputImgFile}
        erros={errors.imgFile}
      />

      <Button variant="primary" type="submit">
        Enviar
      </Button>
      {' '}
      <Button variant="secondary">
        Voltar
      </Button>
    </FormStyled>
  );
}

export default Registration;