var path = require('path');
var appDir = path.dirname(require.main.filename);


exports.init = (req, res) => {
    console.log('sports app');
    
    // res.render('sportsApp')
    console.log(appDir);
    
    res.sendFile(appDir + '/public/sportsApp.html');
}