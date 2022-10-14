const diskStore = (path) => {  
    const imagesFolder = 'pictures';
    const audioFolder = 'audio';

    return {
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        },
        destination: function (req, file, cb) {
            const isAudioFile = file.fieldname === 'audio';
            cb(null, path.resolve(__dirname, `../data/midia/${isAudioFile ? audioFolder : imagesFolder}`))
        },
    }    
}

const feedFilesDir = (req) => {
    const { audio, img } = req.files;
    const newSong = req.body.song

    newSong.audioDir = audio[0].path;
    newSong.imgDir = '/static/' + img[0].filename;

    return newSong;
}

module.exports = {diskStore , feedFilesDir}