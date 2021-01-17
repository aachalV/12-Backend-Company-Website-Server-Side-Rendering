//Route handlers for companies
const fs = require("fs");
const path = require("path");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");
const sendErrorMessage = require("../helpers/sendError");

const fileName = path.join(__dirname, "../data", "companies.json");
const companies = JSON.parse(fs.readFileSync(fileName, "utf-8"));

//Get All Blogs
const getSurfboard = (req, res, next) => {
  let id = "sb";
  let company = companies.find((company) => {
    return company.id == id;
  });
  sendResponse(200, "Sucessful", company, req, res);
};
//Check Id
const isIdValid = (req, res, next) => {
  let id = req.params.id;
  let idExists = companies.some((company) => {
    return company.id == id;
  });
  if (!idExists) {
    return sendErrorMessage(
      new AppError(
        400,
        "Unsuccessful",
        "Request Body Invalid Input...Id doesn't exists"
      ),
      req,
      res
    );
  }
  next();
};
//Get Company by Id
const getCompanyById = (req, res, next) => {
  let id = req.params.id;
  let company = companies.find((company) => {
    return company.id == id;
  });

  sendResponse(200, "Successfull", company, req, res);
};

module.exports.getSurfboard = getSurfboard;
module.exports.isIdValid = isIdValid;
module.exports.getCompanyById = getCompanyById;
