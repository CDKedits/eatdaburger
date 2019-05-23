const db = require(`../config`)

module.exports = {
  async getAll() {
    let response = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM burgers`, (e, burgers) => {
        if (e) reject(e)
        console.log(burgers)
        resolve(name)
      })
    })
  }
  // addOne () {

  // },
  // deleteOne () {

  // }
}