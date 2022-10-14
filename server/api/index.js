const path = require('path');
const express = require('express')
const multer = require('multer');
const cors = require('cors')

const { loadSongsJson, writeSongJson, getFilesFromSong } = require('../models/song_model')
const { diskStore, feedFilesDir } = require('../utils/helper')

const app = express();
app.use(cors())
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '../data/midia/pictures')));

const storage = multer.diskStorage(diskStore(path))
const upload = multer({storage});

const fields = [
    {
        name: 'img',
        maxCount: 1
    },
    {
        name: 'audio',
        maxCount: 1
    }
];

app.get('/api/songs', (req, res) => {
    res.status(200).send(loadSongsJson(true))
});

app.post('/api/songs', upload.fields(fields), (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.status(418).send('invalid JSON body')
    }
    const result = writeSongJson(feedFilesDir(req));

    res.status(result ? 200 : 500).send();
});

app.get('/api/songs/:id', (req, res) => {
    res.status(200).sendFile(getFilesFromSong(req.params.id, path))
});

app.listen(5000, () => console.log("Server started on port 5000"))