const user = require('../models/User');

module.exports = (req, res, next) => {
  user.findById(req.session.userID).then((user, err) => {
    if (err || !user) {
      return res.redirect('/login');
    }
    next();
  });
};
