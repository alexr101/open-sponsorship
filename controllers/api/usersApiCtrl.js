// const { validationResult } = require('express-validator/check');
const User = require('../../models/userModel');


exports.get = (req, res) => {
    res.send('HI')
}
exports.getAll = (req, res) => {
    User.find({}, function(err, users) {
        res.json(users);  
    });
}
exports.update = (req, res) => {

}

exports.remove = (req, res) => {

}
exports.create = (req, res) => {
    let user = req.body;
    
    User.create(user, (err, user) => {
        if(err) console.log('err:' + err);
        res.json(user)
    });
}


// const { check, validationResult } = require('express-validator/check');
// const async = require('async');

// exports.create = (res, res) => {
    
// }

// app.get('/users')

// app.post('/user', [
//   // username must be an email
//   check('username').isEmail(),
//   // password must be at least 5 chars long
//   check('password').isLength({ min: 5 })
// ], (req, res) => {
//   // Finds the validation errors in this request and wraps them in an object with handy functions
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }

//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   }).then(user => res.json(user));
// });



// // GET /users/{userId}/applications
// exports.getAllApplications = async (req, res) => {
// 	var apps = await _getAllApplications();
// 	res.send(apps);
// }


// // TODO: have message callbacks live in a route based on user id. eg: `/user/${userID}/msg-callbacks`
// // TODO: make incomingMessageUrl property dynamic
// exports.createApplication = async (req, res) => {
// 	const appName = req.body.appName || req.query.appName;
// 	const appValid = await _appValid(appName);

// 	if(!appValid) return res.send(`App Name: ${appName} is already in use`)

// 	client.Application.create({
// 		name: appName,
// 		incomingMessageUrl: 'http://localhost:8080/msg-callback'
// 	}, (err, response) => {
// 		if (err) return console.log(err);
// 		return res.send(`App: ${appName} created successfully`);
// 	});
// }



// // TODO: Add auth key for these requests
// exports.sendSMS = (req, res) => {
//   var messages = _convertToMessages(req.body.message);
//   var failedSMS = [];

//   async.mapLimit(messages, 5, async message => { 
//       try {
//         await _sendSMS(message);
//         return message;
//       } 
//       catch(err) {
//         message.err = err.message;  
//         failedSMS.push(message);
//         return  message;
//       }      
//     }, (err, allMessages) => {
//       if (err) return console.log(err);
//       res.send({ failedSMS: failedSMS, allMessages: allMessages });
//     });
// };




// exports.updatePhone = async (req, res) => {
// 	const numberId = req.body.numberId;
// 	const newName = req.body.updates.name;
// 	const appName = req.body.updates.appName || req.query.updates.appName;
// 	const app = await _getAppByName(appName);

//   if(app) {
//     client.PhoneNumber.update(numberId, {
// 			applicationId: app.id ,
// 			name: newName
//     }, async (err) => {
// 				if(err) return console.log(err);

// 				var numberInfo = await _getClientPhoneNumber(numberId)
// 				res.send(numberInfo);
//     });    
//   } else {
// 		res.send('App doesn\'t exist');
// 	}
// }



