require("dotenv").config();
require("./utils/mongo");

const express = require("express");
const path = require("path");
const router = express();
const PORT = process.env.PORT || 3000;

const landings = require("./controllers/landings_controller");
const nea = require("./controllers/nea_controller");
const cors = require("cors");

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => {});
router.get("/api/astronomy/neas", nea.getNeas);
router.post("/api/astronomy/neas/create", nea.createNea);
router.put("/api/astronomy/neas/edit/:designation", nea.editNeas);
router.post("/api/astronomy/neas/delete/:designation", nea.deleteNeas);
router.get("/api/astronomy/landings", landings.getLandingsQuery);
router.get("/api/astronomy/landings/mass/:mass?", landings.getLandingsMass);
router.get("/api/astronomy/landings/class/:recclass?", landings.getLandingClass);
router.post("/api/astronomy/landings/create", landings.createLanding);
router.put("/api/astronomy/landings/edit/:id", landings.editLanding);
router.post("/api/astronomy/landings/delete/:id", landings.deleteLanding);

router.listen(PORT, () => {
    console.log(`Example app listening at ${PORT}`);
});
