const service = require("../movies.service");
const validationVariables = require("./validationVariables");

async function validateGenres(req, res, next) {
  const { genre } = req.query;
  const validGenres = validationVariables.validGenres;

  if (genre && validGenres.has(genre) || !genre) return next();

  return next({
    status: 400,
    message: `Movie genre: ${genre} is not a valid genre`,
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
      message: `Input query orderBy: ${orderBy} is not valid`,
    });
  }
  if (ascOrDesc && !validAscOrDesc.has(ascOrDesc)) {
    return next({
      status: 400,
      message: `Input query ascOrDesc: ${ascOrDesc} is not valid`,
    });
  }
  return next();
}

module.exports = {
  validateGenres,
  validateOrderAndAscDesc
}

