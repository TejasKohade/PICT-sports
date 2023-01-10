const Sports = require("../models/Sports");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const newSport = new Sports(req.body);
  try {
    const savedSport = await newSport.save();
    res.status(200).json(savedSport);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all the orders

router.get("/", async (req, res) => {
  try {
    const sports = await Sports.find();
    res.status(200).json(sports);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get personal cart

// router.get("/:id", async (req, res) => {
//   try {
//     const allotments = await Allotments.find({ userId: req.params.id });
//     res.status(200).json(allotments);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
  const sport = await Sports.findById(req.params.id);

  try {
    await sport.deleteOne();
    res.status(200).json("Request Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const sports = await Sports.find({ userid: req.params.id });
    res.status(200).json(sports);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update ongoing orders

// router.put("/:id", async (req, res) => {
//   try {
//     const allotments = await Allotments.find({ userId: req.params.id });
//     for (var i = 0; i < allotments.length; i++) {
//       await allotments[i].updateOne({ $set: req.body });
//     }
//     res.status(200).json(allotments);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// order findby id
router.put("/allotment/:id", async (req, res) => {
  try {
    const sport = await Sports.findById(req.params.id);
    await sport.updateOne({ $set: req.body });
    console.log(sport)
    res.status(200).json("the request has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
