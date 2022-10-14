const {readFileSync, writeFileSync} = require('fs');
const path = require('path');
const pathFile = '../data/songs.json';

const songs = () => JSON.parse(readFileSync(path.resolve(__dirname, pathFile)));

const getFilesFromSong = (id, path) => {
    const { audioDir } = songs().filter(song => song.id == id)[0];
    return path.resolve(__dirname, audioDir);
}

const loadSongsJson = (filterDir = false) => {
    if(!filterDir)
        return songs();
    return songs().map(song => {
        delete song.audioDir;
        return song
    });
}

const writeSongJson = (newData) => {

    const currentData = loadSongsJson();
    newData['id'] = currentData.length + 1;
    currentData.push(newData)

    const dataString = JSON.stringify(currentData, null, 2);
    writeFileSync(path.resolve(__dirname, pathFile), dataString);

    return true;
}

module.exports = { loadSongsJson, writeSongJson, getFilesFromSong }