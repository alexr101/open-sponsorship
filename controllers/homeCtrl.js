let path = require('path');
let appDir = path.dirname(require.main.filename);

exports.index = (req, res) => {
    res.sendFile(appDir + '/public/app/index.html');
}