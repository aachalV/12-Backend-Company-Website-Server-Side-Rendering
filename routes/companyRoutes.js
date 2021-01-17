const express = require("express");
const { getCompanyByName } = require("../controllers/companyController");

const router = express.Router();

//End points
router.route("/company").get(getSurfboard);
router.route("/company/:name").get(getCompanyByName);

module.exports = router;
