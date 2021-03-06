const Nea = require("../models/nea_model");


const getNeas = async (req, res) => {
  let data;
  try {
    if (req.query.class) {
      console.log(req.query.class);
      data = await Nea.find(
        { orbit_class: req.query.class },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.from && req.query.to) {
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from, $lte: req.query.to } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.from) {
      data = await Nea.find(
        { discovery_date: { $gte: req.query.from } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    } else if (req.query.to) {
      data = await Nea.find(
        { discovery_date: { $lte: req.query.to } },
        "orbit_class designation discovery_date -_id"
      );
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const createNea = async (req, res) => {
  console.log(req.body);
  try {
    const lan = req.body;
    await Nea.create(lan);
    res.status(201).json({ message: "Nea created" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const editNeas = async (req, res) => {
  try {
    let query = { designation: req.params.designation };
    let update = req.body;
    const result = await Nea.findOneAndUpdate(query, update, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "Nea modified" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteNeas = async (req, res) => {
    try {
      await Nea.deleteOne({ designation: req.params.designation })
      res.status(200).send('Nea deleted');
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
module.exports = { 
    getNeas, 
    createNea, 
    editNeas, 
    deleteNeas 
};