const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
  const authToken= req.get('Authorization')

  if(!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    logger.error(`Unathorized request to path: ${req.path}`)
    return res.status({ error: 'Unauthorized request '})
  }

  next()
}

module.exports = validateBearerToken