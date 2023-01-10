const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password , rollno } = req.body;
    if (password.length < 6) throw "Password must be atleast of 6 characters";
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPass,
      rollno
    });
    const user = await newUser.save();
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      errors.email = "User not found";
      res.status(404).json({ errors });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      errors.validPassword = "User not found";
      res.status(400).json({ errors });
      // stop further execution in this callback
      return;
    }

    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
