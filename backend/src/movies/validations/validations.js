const service = require("../movies.service");
const validationVariables = require("./validations/validationVariables");

async function validateGenres(req, res, next) {
  const { genres } = req.query;
  const validGenres = validationVariables.validGenres;

  if (genres && validGenres.has(genres)) return next();

  return next({
    status: 400,
    message: `Movie genre: ${genres} does not exist`,
  });
}

async function validateOrderAndAscDesc(req, res, next) {
  const { orderBy } = req.query;
  const { ascOrDesc } = req.query;
  const validOrderBys = validationVariables.validOrderBys;
  const validAscOrDesc = validationVariables.validAscOrDesc;

  if (orderBy && !validOrderBys.has(orderBy)) {
    return next({
      status: 400,
      message: `Input query orderBy: ${orderBy} does not exist`,
    });
  }
  if (ascOrDesc && !validAscOrDesc.has(ascOrDesc)) {
    return next({
      status: 400,
      message: `Input query ascOrDesc: ${ascOrDesc} does not exist`,
    });
  }
  return next();
}

module.exports = {
  validateGenres,
  validateOrderAndAscDesc
}

