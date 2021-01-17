const express = require("express");
const {
  getSurfboard,
  getCompanyById,
} = require("../controllers/companyController");

const router = express.Router();

//End points
router.route("/company").get(getSurfboard);
router.route("/company/:id").get(getCompanyById);

module.exports = router;
