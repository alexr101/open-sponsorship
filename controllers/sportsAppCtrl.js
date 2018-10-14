let path = require('path');
let appDir = path.dirname(require.main.filename);


exports.init = (req, res) => {
    res.sendFile(appDir + '/public/sportsApp.html');
}