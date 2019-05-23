const { createConnection } = require(`mysql2`)
let connectObj

if (process.env.NODE_ENV === `production`) {
  connectObj = process.env.JAWSDB_URL
} else {
  connectObj = require(`../keys.js`)
}

module.exports = createConnection(connectObj)