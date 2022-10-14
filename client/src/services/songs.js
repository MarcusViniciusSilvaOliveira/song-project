import { Get, Post } from './api/index';

const SOURCE = '/songs';

export const GetSongs = () => {
    return Get(SOURCE);
}
export const SaveNewSong = (body) => {
    return Post(SOURCE, body, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
export const GetSongAudio = (id) => {
    return `${SOURCE}/${id}`;
}