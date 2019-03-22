const express = require('express');
const app = express();
const userRouter = express.Router();
const User = require('../models/user');
const Build = require('../models/building')
const Room = require('../models/room')
const Subjects = require('../models/subject')





userRouter.route('/users').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('users', { users: users }); //render collection "users"
    }
  });
});





userRouter.route('/create').get(function (req, res) {
  res.render('create');
});

userRouter.route('/create').post(function (req, res) {
  const user = new User(req.body);
  
  user.save()
    .then(user => {
      res.redirect('/home/users');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


userRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  User.findById(id, function (err, user) {
    res.render('edit', { user: user });
  });
});

userRouter.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      user.username = req.body.username;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.type = req.body.type;

      user.save().then(user => {
        res.redirect('/home/users');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

userRouter.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({ _id: req.params.id },
    function (err, coin) {
      if (err) console.log(err)
      else res.redirect('users');
    });
});

userRouter.route('/').get(function (req, res) {
  res.render('login',{err:false});
});

userRouter.route("/login").post(function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username, password: password }, function(err, user) {
    if (err) {
      res.status(404).send("No have user");
      res.render("login",{err:true});
    } else {
      if (user) {
        res.redirect('users');
        res.render("/", {
          user: user
        });
      } else {
        res.render("login",{err:true});
      }
    }
    
  });
});




////////////////////building/////////////////////////
userRouter.route('/building').get(function (req, res) {
  Build.find(function (err, building) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('building', { building: building }); //render collection "users"
    }
  });
});

userRouter.route('/createbuilding').get(function (req, res) {
  res.render('createbuilding');
});

userRouter.route('/createbuilding').post(function (req, res) {
  const build = new Build(req.body);
  
  build.save()
    .then(build => {
      res.redirect('/home/building');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


userRouter.route('/editbuilding/:id').get(function (req, res) {
  const id = req.params.id;
  Build.findById(id, function (err, build) {
    res.render('editbuilding', { build: build });
  });
});

userRouter.route('/updatebuilding/:id').post(function (req, res) {
  Build.findById(req.params.id, function (err, build) {
    if (!build)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      build.ID = req.body.ID;
      build.name = req.body.name;
      build.floor = req.body.floor;
      build.save().then(user => {
        res.redirect('/home/building');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

userRouter.route('/deletebuilding/:id').get(function (req, res) {
  Build.findByIdAndRemove({ _id: req.params.id },
    function (err, building) {
      if (err) console.log(err)
      else res.redirect('building');
    });
});

///////////////////////////room/////////////////////////////
userRouter.route('/room').get(function (req, res) {
  Room.find(function (err, room) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('room', { room: room }); //render collection "users"
    }
  });
});

userRouter.route('/createroom').get(function (req, res) {
  res.render('createroom');
});

userRouter.route('/createroom').post(function (req, res) {
  const room = new Room(req.body);
  
  room.save()
    .then(room => {
      res.redirect('/home/room');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


userRouter.route('/editroom/:id').get(function (req, res) {
  const id = req.params.id;
  Room.findById(id, function (err, room) {
    res.render('editroom', { room: room });
  });
});

userRouter.route('/updateroom/:id').post(function (req, res) {
  Room.findById(req.params.id, function (err, room) {
    if (!room)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      room.ID = req.body.ID;
      room.floor = req.body.floor;
      room.building = req.body.building;
      room.save().then(user => {
        res.redirect('/home/room');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

userRouter.route('/deleteroom/:id').get(function (req, res) {
  Room.findByIdAndRemove({ _id: req.params.id },
    function (err, room) {
      if (err) console.log(err)
      else res.redirect('room');
    });
});

///////////////////subjects////////////////////////////////////////////////
userRouter.route('/subjects').get(function (req, res) {
  Subjects.find(function (err, subjects) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('subjects', { subjects: subjects }); //render collection "users"
    }
  });
});

userRouter.route('/createsubjects').get(function (req, res) {
  res.render('createsubjects');
});

userRouter.route('/createsubjects').post(function (req, res) {
  const subjects = new Subjects(req.body);
  
  subjects.save()
    .then(subjects => {
      res.redirect('/home/subjects');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


userRouter.route('/editsubjects/:id').get(function (req, res) {
  const id = req.params.id;
  Subjects.findById(id, function (err, subjects) {
    res.render('editsubjects', { subjects: subjects });
  });
});

userRouter.route('/updatesubjects/:id').post(function (req, res) {
  Subjects.findById(req.params.id, function (err, subjects) {
    if (!subjects)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      subjects.ID = req.body.ID;
      subjects.name = req.body.name;
      subjects.ID_teacher = req.body.ID_teacher;
      subjects.amount = req.body.amount;
      subjects.group = req.body.group;
      subjects.save().then(subjects => {
        res.redirect('/home/subjects');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

userRouter.route('/deletesubjects/:id').get(function (req, res) {
  Subjects.findByIdAndRemove({ _id: req.params.id },
    function (err, subjects) {
      if (err) console.log(err)
      else res.redirect('subjects');
    });
});




module.exports = userRouter;