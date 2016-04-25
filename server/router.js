const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const path =require('path');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false});


module.exports = function(app) { //module.export --> node way to export

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../baconClient/index.html'));
  });
  
  app.get('/secret', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123'})
  });
  app.get('/videos', requireAuth, function(req, res) {
    res.send( { videoList: [{title: "jee", wistiaId: "sdkgjadkg"}, {title:"jee2", wistiaId:"sdfsdfdsf"}]} )
  });

  app.post('/signin',requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  
};

// req -> incoming http request, res -> response we are sending back, next -> mostly for error handling will be more later


