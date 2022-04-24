const mongoose = require('mongoose');

const schema = {
    designation: String,
    discovery_date: String,
    h_mag: String,
    moid_au: String,
    q_au_1: String,
    q_au_2: String,
    period_yr: String,
    i_deg: String,
    pha: String,
    orbit_class: String
}

const neaSchema = mongoose.Schema(schema);
const Nea = mongoose.model('neas', neaSchema);
module.exports = Nea;