const Authentication = require('./controllers/authentication');
const Videos = require('./controllers/videos');
const passportService = require('./services/passport');
const passport = require('passport');
const path =require('path');
const Video = require('./models/video');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false});


module.exports = function(app) { //module.export --> node way to export

//ToDo Generoi videolle id ja lähetä jotta sitä voidaan käyttää react listissä
  app.get('/videos', requireAuth, function(req, res) {
    Video.find({}, function(err, videoList) {
      if(err) {
        res.send({error: err})
      }
      res.send( { videoList: videoList})
    })
  });

  app.post('/signin',requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/addvideo', requireAuth, Videos.saveVideo);


};

// req -> incoming http request, res -> response we are sending back, next -> mostly for error handling will be more later


