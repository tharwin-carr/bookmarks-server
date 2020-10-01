const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
  const apiToken= process.env.API_TOKEN
  const authToken= req.get('Authorization')

  if(!authToken || authToken.split(' ')[1] !== apiToken) {
    logger.error(`Unathorized request to path: ${req.path}`)
    return res.status({ error: 'Unauthorized request '})
  }

  next()
}

module.exports = validateBearerToken