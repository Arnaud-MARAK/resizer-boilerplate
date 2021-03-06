/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



// const db mysql.creatConnection({

//   host: 'sails@localhost:1337/sails_mysql',
//   user: 'sails',
//   password: 'sails'
// });

// db.connect(function (err) {

//   if (err) throw err;

//   console.log("Connecté à la base de données MySQL!");

// });

module.exports = {

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    console.log("login test")
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        console.log(err)
        return res.redirect("/login")
      } req.logIn(user, function (err) {
        if (err) res.send(err);
        return res.redirect("/");
      });
    })(req, res);
  },

  /**
   * `UserController.logout()`
   */
  logout: async function (req, res) {
    req.logout();
    res.redirect("/login")
  },

  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    console.log("signup test")
    User.signup({
      username: req.param('username'),
      password: req.param('password'),
      passwordConfirm: req.param('password_confirm')
    }, (err) => {
      if (err) {
        return res.negotiate(err);
      }
      return res.redirect('/login');
    });
  }
};