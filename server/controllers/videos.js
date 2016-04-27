const Video = require('../models/video');
const User = require('../models/user');

exports.saveVideo = function(req, res, next) {
  const title = req.body.title;
  const wistiaId = req.body.wistiaId;
  const description = req.body.description;
  
  if(!title || !wistiaId || !description) {
    return res.status(422).send({ error: 'You must fill all the fields'})
  }

  User.findOne({_id: req.user._id, admin: true}, function(err, admin){
      if(err) {
        return next(err)
      }

      if(admin) {
        const video = new Video({
          title: title,
          wistiaId: wistiaId,
          description: description
        });

        video.save(function(err) {
          if(err) {
            return next(err);
          }
          res.send( {message: "Video added"} )
        })
      }else {
        return res.status(401).send({ error: 'Unauthorized'});
      }
    });
};



