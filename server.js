const express = require('express');
const multer = require('multer');
const path  = require('path');

var upload = multer({ dest: 'uploads/' });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/get-file-size', upload.single('file'), function(req, res, next) {
    console.log(req.file);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
